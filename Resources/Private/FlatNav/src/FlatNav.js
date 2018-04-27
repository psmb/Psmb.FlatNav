import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {$get, $transform} from 'plow-js';
import {Button, Icon, IconButton, Tabs} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';
import {actions, selectors} from '@neos-project/neos-ui-redux-store';
import {neos} from '@neos-project/neos-ui-decorators';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import HideSelectedNode from './HideSelectedNode';
import DeleteSelectedNode from './DeleteSelectedNode';
import mergeClassNames from 'classnames';
import style from './style.css';
import RefreshNodes from "./RefreshNodes";

const makeFlatNavContainer = OriginalPageTree => {
    class FlatNavContainer extends Component {
        state = {};

        constructor(props) {
            super(props);
            Object.keys(this.props.options.presets).forEach(preset => {
                this.state[preset] = {
                    page: 1,
                    isLoading: false,
                    isLoadingReferenceNodePath: false,
                    nodes: [],
                    moreNodesAvailable: true,
                    newReferenceNodePath: ''
                };
            });
        }

        makeResetNodes = preset => callback => {
            this.setState({
                [preset]: {
                    ...this.state[preset],
                    page: 1,
                    nodes: [],
                    moreNodesAvailable: true
                }
            }, callback);
        }

        makeFetchNodes = preset => () => {
            this.setState({
                [preset]: {
                    ...this.state[preset],
                    isLoading: true,
                    moreNodesAvailable: true
                }
            });
            fetchWithErrorHandling.withCsrfToken(csrfToken => ({
                url: `/flatnav/query?nodeContextPath=${this.props.siteNodeContextPath}&preset=${preset}&page=${this.state[preset].page}`,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json'
                }
            }))
                .then(response => response && response.json())
                .then(nodes => {
                    if (nodes.length > 0) {
                        const nodesMap = nodes.reduce((result, node) => {
                            result[node.contextPath] = node;
                            return result;
                        }, {});
                        this.props.merge(nodesMap);
                        this.setState({
                            [preset]: {
                                ...this.state[preset],
                                page: this.state[preset].page + 1,
                                isLoading: false,
                                nodes: [...this.state[preset].nodes, ...Object.keys(nodesMap)],
                                moreNodesAvailable: true
                            }
                        });
                    } else {
                        this.setState({
                            [preset]: {
                                ...this.state[preset],
                                isLoading: false,
                                moreNodesAvailable: false
                            }
                        });
                    }
                });
        };

        makeGetNewReferenceNodePath = preset => () => {
            this.setState({
                [preset]: {
                    ...this.state[preset],
                    isLoadingReferenceNodePath: true
                }
            });
            fetchWithErrorHandling.withCsrfToken(csrfToken => ({
                url: `/flatnav/getNewReferenceNodePath?nodeContextPath=${this.props.siteNodeContextPath}&preset=${preset}`,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json'
                }
            }))
                .then(response => response && response.json())
                .then(newReferenceNodePath => {
                    this.setState({
                        [preset]: {
                            ...this.state[preset],
                            isLoading: false,
                            isLoadingReferenceNodePath: false,
                            newReferenceNodePath: newReferenceNodePath
                        }
                    });
                });
        };

        render() {
            return (
                <Tabs>
                    {Object.keys(this.props.options.presets).map(presetName => {
                        const preset = this.props.options.presets[presetName];
                        return (
                            <Tabs.Panel key={presetName} icon={preset.icon} tooltip={preset.label}>
                                {preset.type === 'flat' && (<FlatNav
                                    preset={preset}
                                    fetchNodes={this.makeFetchNodes(presetName)}
                                    resetNodes={this.makeResetNodes(presetName)}
                                    fetchNewReferenceNodePath={this.makeGetNewReferenceNodePath(presetName)}
                                    {...this.state[presetName]}
                                    />)}
                                {preset.type === 'tree' && (<OriginalPageTree />)}
                            </Tabs.Panel>
                        );
                    })}
                </Tabs>
            );
        }
    }
    return neos(globalRegistry => ({
        options: globalRegistry.get('frontendConfiguration').get('Psmb_FlatNav')
    }))(connect($transform({
        siteNodeContextPath: $get('cr.nodes.siteNode')
    }), {
        merge: actions.CR.Nodes.merge
    })(FlatNavContainer));
};

export default makeFlatNavContainer;

@neos(globalRegistry => ({
    nodeTypesRegistry: globalRegistry.get('@neos-project/neos-ui-contentrepository'),
    serverFeedbackHandlers: globalRegistry.get('serverFeedbackHandlers')
}))
@connect($transform({
    nodeData: $get('cr.nodes.byContextPath'),
    focused: $get('ui.pageTree.isFocused'),
    siteNodeContextPath: $get('cr.nodes.siteNode')
}), {
    setSrc: actions.UI.ContentCanvas.setSrc,
    focus: actions.UI.PageTree.focus,
    openNodeCreationDialog: actions.UI.NodeCreationDialog.open,
    commenceNodeCreation: actions.CR.Nodes.commenceCreation,
    selectNodeType: actions.UI.SelectNodeTypeModal.apply
})
class FlatNav extends Component {
    static propTypes = {
        nodes: PropTypes.array.isRequired,
        preset: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        isLoadingReferenceNodePath: PropTypes.bool.isRequired,
        page: PropTypes.number.isRequired,
        newReferenceNodePath: PropTypes.string.isRequired,
        moreNodesAvailable: PropTypes.bool.isRequired
    };

    componentDidMount() {
        if (this.props.nodes.length === 0) {
            this.props.fetchNodes();
            if (this.props.preset.newReferenceNodePath.indexOf('/') !== 0) {
                this.props.fetchNewReferenceNodePath();
            }
        }
        this.props.serverFeedbackHandlers.set('Neos.Neos.Ui:NodeCreated/DocumentAdded', this.handleNodeWasCreated, 'after Neos.Neos.Ui:NodeCreated/Main');
    }

    handleNodeWasCreated = (feedbackPayload, {store}) => {
        const state = store.getState();

        const getNodeByContextPathSelector = selectors.CR.Nodes.makeGetNodeByContextPathSelector(feedbackPayload.contextPath);
        const node = getNodeByContextPathSelector(state);
        const nodeTypeName = $get('nodeType', node);

        if (nodeTypeName === this.props.preset.newNodeType) {
            this.refreshFlatNav();
        }
    }

    createNode = () => {
        const context = this.props.siteNodeContextPath.split('@')[1];
        const contextPath = (this.props.newReferenceNodePath || this.props.preset.newReferenceNodePath) + '@' + context;
        this.props.commenceNodeCreation(contextPath);
        this.props.selectNodeType('into', this.props.preset.newNodeType);
    }

    refreshFlatNav = () => {
        this.props.resetNodes(this.props.fetchNodes);
    }

    renderNodes = () => {
        return this.props.nodes
            .map(contextPath => {
                const item = $get([contextPath], this.props.nodeData);
                if (item) {
                    const nodeTypeName = $get('nodeType', item);
                    const nodeType = this.props.nodeTypesRegistry.getNodeType(nodeTypeName);
                    return (
                        <div
                            className={mergeClassNames({
                                [style.node]: true,
                                [style['node--focused']]: this.props.focused === contextPath
                            })}
                            key={contextPath}
                            onClick={() => {
                                this.props.setSrc($get('uri', item));
                                this.props.focus(contextPath);
                            }}
                            role="button"
                            >
                            <Icon icon={$get('ui.icon', nodeType)} /> {$get('label', item)}
                        </div>
                    );
                }
                return null;
            }).filter(i => i);
    };

    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <div className={style.toolbar}>
                    {!this.props.isLoadingReferenceNodePath && (<IconButton icon="plus" onClick={this.createNode}/>)}
                    <HideSelectedNode/>
                    <DeleteSelectedNode/>
                    <RefreshNodes onClick={this.refreshFlatNav} isLoading={this.props.isLoading}/>
                </div>

                <div style={{overflowY: 'auto'}}>
                    {this.renderNodes()}
                </div>
                {this.props.moreNodesAvailable && (<Button
                    onClick={this.props.fetchNodes}
                    style="clean"
                    className={style.loadMoreButton}
                    isDisabled={this.props.isLoading}
                >
                    <div style={{textAlign: 'center'}}>
                        <Icon
                            spin={this.props.isLoading}
                            icon={this.props.isLoading ? 'spinner' : 'angle-double-down'}
                        />
                        &nbsp;{this.props.isLoading ? 'Loading...' : 'Load more'}
                    </div>
                </Button>)}
            </div>
        );
    }
}
