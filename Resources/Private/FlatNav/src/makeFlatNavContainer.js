import React, {Component} from 'react';
import {$get, $transform} from 'plow-js';
import {Tabs} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';
import {actions} from '@neos-project/neos-ui-redux-store';
import {neos} from '@neos-project/neos-ui-decorators';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import backend from '@neos-project/neos-ui-backend-connector';
import FlatNav from './FlatNav';
import style from './style.css';
import debounce from 'lodash.debounce';

// Taken from here, as it's not exported in the UI
// https://github.com/neos/neos-ui/blob/b2a52d66a211b192dfc541799779a8be27bf5a31/packages/neos-ui-sagas/src/CR/NodeOperations/helpers.js#L3
const parentNodeContextPath = contextPath => {
    if (typeof contextPath !== 'string') {
        return null;
    }

    const [path, context] = contextPath.split('@');

    if (path.length === 0) {
        // We are at top level; so there is no parent anymore!
        return false;
    }

    return `${path.substr(0, path.lastIndexOf('/'))}@${context}`;
};

const makeFlatNavContainer = OriginalPageTree => {
    class FlatNavContainer extends Component {
        state = {};

        constructor(props) {
            super(props);
            this.state = this.buildDefaultState(props);

            // It's not safe to rely on React's state to do the locking
            this.loadingLock = {};
            this.loadingReferenceNodePathLock = {};
        }

        componentDidUpdate(prevProps) {
            // If the siteNodeContextPath or baseWorkspaceName have changed, fully reset the state
            if (
                this.props.siteNodeContextPath !== prevProps.siteNodeContextPath ||
                this.props.baseWorkspaceName !== prevProps.baseWorkspaceName
            ) {
                this.fullReset();
            }
        }

        buildDefaultState = props => {
            const state = {};
            Object.keys(props.options.presets).forEach(presetName => {
                const preset = props.options.presets[presetName];
                if (!presetName) {
                    return null;
                }
                let newReferenceNodePath;
                // If `newReferenceNodePath` is static, append context to it, otherwise set to empty, as it would be fetched later
                const newReferenceNodePathSetting = $get(['options', 'presets', presetName, 'newReferenceNodePath'], props);
                if (typeof newReferenceNodePathSetting === 'string' && newReferenceNodePathSetting.indexOf('/') === 0) {
                    newReferenceNodePath = preset.newReferenceNodePath;
                } else {
                    newReferenceNodePath = '';
                }
                state[presetName] = {
                    page: 1,
                    isLoading: false,
                    isLoadingReferenceNodePath: false,
                    nodes: [],
                    searchTerm: '',
                    moreNodesAvailable: true,
                    newReferenceNodePath
                };
            });
            return state;
        };

        fullReset = () => {
            const defaultState = this.buildDefaultState(this.props);
            this.setState({
                ...defaultState
            });
        }

        makeResetNodes = (preset, fetchNodes) => () => {
            this.setState({
                [preset]: {
                    ...this.state[preset],
                    page: 1,
                    nodes: [],
                    moreNodesAvailable: true
                }
            }, fetchNodes);
        }

        makeFetchNodes = preset => (loadMore = false) => {
            const searchTerm = this.state[preset].searchTerm;
            const page = loadMore ? this.state[preset].page + 1 : 1
            const url = `/neos/flatnav/query?nodeContextPath=${encodeURIComponent(this.props.siteNodeContextPath)}&preset=${preset}&page=${page}${searchTerm ? `&searchTerm=${searchTerm}` : ''}`
            if (this.loadingLock[url]) {
                return;
            }
            this.loadingLock[url] = true;
            this.setState({
                [preset]: {
                    ...this.state[preset],
                    isLoading: true,
                    moreNodesAvailable: true
                }
            });

            fetchWithErrorHandling.withCsrfToken(csrfToken => ({
                url,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json'
                }
            }))
                .then(response => response && response.json())
                .then(nodes => {
                    // Ignore the response if the searchTerm has changed while request was running
                    if (searchTerm === this.state[preset].searchTerm) {
                        if (nodes.length > 0) {
                            const nodesMap = nodes.reduce((result, node) => {
                                result[node.contextPath] = node;
                                return result;
                            }, {});
                            this.props.merge(nodesMap);
                            this.setState({
                                [preset]: {
                                    ...this.state[preset],
                                    isLoading: false,
                                    nodes: loadMore ? [...this.state[preset].nodes, ...Object.keys(nodesMap)] : Object.keys(nodesMap),
                                    page,
                                    moreNodesAvailable: true
                                }
                            });
                        } else {
                            this.setState({
                                [preset]: {
                                    ...this.state[preset],
                                    isLoading: false,
                                    moreNodesAvailable: false,
                                    nodes: loadMore ? this.state[preset].nodes : [],
                                }
                            });
                        }
                        this.loadingLock[url] = false;
                    }
                });
        };

        makeSetSearchTerm = (preset, fetchNodes) => searchTerm => {
            this.setState({
                [preset]: {
                    ...this.state[preset],
                    nodes: [],
                    page: 1,
                    isLoading: true,
                    searchTerm
                }
            }, fetchNodes);
        }

        // Gets the `newReferenceNodePath` setting and loads that node into state
        makeGetNewReference = preset => () => {
            if (this.loadingReferenceNodePathLock[preset]) {
                return;
            }
            this.loadingReferenceNodePathLock[preset] = true;
            const context = this.props.siteNodeContextPath.split('@')[1];
            if (this.state[preset].newReferenceNodePath.indexOf('/') === 0) {
                this.fetchNodeWithParents(this.state[preset].newReferenceNodePath + '@' + context);
            } else {
                this.setState({
                    [preset]: {
                        ...this.state[preset],
                        isLoadingReferenceNodePath: true
                    }
                });
                fetchWithErrorHandling.withCsrfToken(csrfToken => ({
                    url: `/neos/flatnav/getNewReferenceNodePath?nodeContextPath=${encodeURIComponent(this.props.siteNodeContextPath)}&preset=${preset}`,
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
                                isLoadingReferenceNodePath: false,
                                newReferenceNodePath
                            }
                        });
                        this.fetchNodeWithParents(newReferenceNodePath + '@' + context);
                        this.loadingReferenceNodePathLock[preset] = false;
                    });
            }
        };

        fetchNodeWithParents = contextPath => {
            // This is rather a hack. We need to make sure the target NewReferenceNode is loaded
            // in order to be able to create anything inside it.
            const {siteNodeContextPath} = this.props;
            const {q} = backend.get();

            let parentContextPath = contextPath;

            while (parentContextPath !== siteNodeContextPath) {
                const node = $get([parentContextPath], this.props.nodeData);
                // If the given node is not in the state, load it
                if (!node) {
                    q(parentContextPath).get().then(nodes => {
                        this.props.merge(nodes.reduce((nodeMap, node) => {
                            nodeMap[$get('contextPath', node)] = node;
                            return nodeMap;
                        }, {}));
                    });
                }
                parentContextPath = parentNodeContextPath(parentContextPath);
            }
        };

        render() {
            return (
                <Tabs theme={{
                    tabs__content: style.tabs__content,
                    tabs__panel: style.tabs__panel
                }}>
                    {Object.keys(this.props.options.presets).map(presetName => {
                        const preset = this.props.options.presets[presetName];
                        if (!preset) {
                            return null;
                        }
                        if (preset.disabled) {
                            return null;
                        }
                        const fetchNodes = this.makeFetchNodes(presetName)
                        const resetNodes = this.makeResetNodes(presetName, fetchNodes)
                        const debouncedFetchNodes = debounce(fetchNodes, 400);
                        const setSearchTerm = this.makeSetSearchTerm(presetName, debouncedFetchNodes)
                        const fetchNewReference = this.makeGetNewReference(presetName)
                        return (
                            <Tabs.Panel id={presetName} key={presetName} icon={preset.icon} tooltip={this.props.i18nRegistry.translate(preset.label)} theme={{
                                panel: style.panel
                            }}>
                                {preset.type === 'flat' && (<FlatNav
                                    preset={preset}
                                    fetchNodes={fetchNodes}
                                    resetNodes={resetNodes}
                                    setSearchTerm={setSearchTerm}
                                    fullReset={this.fullReset}
                                    fetchNewReference={fetchNewReference}
                                    {...this.state[presetName]}
                                />)}
                                {preset.type === 'tree' && (<OriginalPageTree />)}
                            </Tabs.Panel>
                        );
                    }).filter(Boolean)}
                </Tabs>
            );
        }
    }
    return neos(globalRegistry => ({
        options: globalRegistry.get('frontendConfiguration').get('Psmb_FlatNav'),
        i18nRegistry: globalRegistry.get('i18n')
    }))(connect($transform({
        siteNodeContextPath: $get('cr.nodes.siteNode'),
        baseWorkspaceName: $get('cr.workspaces.personalWorkspace.baseWorkspace')
    }), {
        merge: actions.CR.Nodes.merge
    })(FlatNavContainer));
};

export default makeFlatNavContainer;
