import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, IconButton, TextInput} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';
import {actions, selectors} from '@neos-project/neos-ui-redux-store';
import {neos} from '@neos-project/neos-ui-decorators';
import HideSelectedNode from './HideSelectedNode';
import DeleteSelectedNode from './DeleteSelectedNode';
import mergeClassNames from 'classnames';
import style from './style.module.css';
import RefreshNodes from "./RefreshNodes";
import SearchInput from "./SearchInput";
@neos(globalRegistry => ({
    nodeTypesRegistry: globalRegistry.get('@neos-project/neos-ui-contentrepository'),
    serverFeedbackHandlers: globalRegistry.get('serverFeedbackHandlers'),
    i18nRegistry: globalRegistry.get('i18n')
}))
@connect(
    (state, {nodeTypesRegistry}) => {
        const isAllowedToAddChildOrSiblingNodesSelector = selectors.CR.Nodes.makeIsAllowedToAddChildOrSiblingNodes(nodeTypesRegistry);
        return (state, {newReferenceNodePath}) => {
            const focusedNodeContextPath = selectors.UI.PageTree.getFocused(state);
            const getNodeByContextPathSelector = selectors.CR.Nodes.makeGetNodeByContextPathSelector(focusedNodeContextPath);
            const focusedNode = getNodeByContextPathSelector(state);
            const canBeDeleted = focusedNode?.policy?.canRemove || false;
            const canBeEdited = focusedNode?.policy?.canEdit || false;
            const context = focusedNodeContextPath.split('@')[1];
            const isAllowedToAddChildOrSiblingNodes = isAllowedToAddChildOrSiblingNodesSelector(state, {
                reference: newReferenceNodePath + '@' + context
            });
            return {
                nodeData: state?.cr?.nodes?.byContextPath,
                focused: selectors.CR.Nodes.focusedNodePathSelector(state),
                siteNodeContextPath: selectors.CR.Nodes.siteNodeContextPathSelector(state),
                baseWorkspaceName: state?.cr?.workspaces?.personalWorkspace?.baseWorkspace,
                publishableNodes: state?.cr?.workspaces?.personalWorkspace?.publishableNodes,
                isAllowedToAddChildOrSiblingNodes,
                canBeDeleted,
                canBeEdited
            }
        }
    }
, {
    setSrc: actions.UI.ContentCanvas.setSrc,
    focus: actions.UI.PageTree.focus,
    openNodeCreationDialog: actions.UI.NodeCreationDialog.open,
    commenceNodeCreation: actions.CR.Nodes.commenceCreation,
    selectNodeType: actions.UI.SelectNodeTypeModal.apply,
    merge: actions.CR.Nodes.merge
})
export default class FlatNav extends Component {
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
        if (
            // No node paths in state on initial load
            this.props.nodes.length === 0
        ) {
            this.props.fetchNodes();
            this.props.fetchNewReference();
        }
        this.props.serverFeedbackHandlers.set('Neos.Neos.Ui:NodeCreated/DocumentAdded', this.handleNodeWasCreated, 'after Neos.Neos.Ui:NodeCreated/Main');
    }

    componentDidUpdate() {
        if (
            // Node data not available for some nodes (e.g. after tree reload)
            !this.props.nodes.every(contextPath => this.props.nodeData?.[contextPath])
        ) {
            this.props.fetchNodes();
            this.props.fetchNewReference();
        }
    }

    handleNodeWasCreated = (feedbackPayload, {store}) => {
        const state = store.getState();

        const getNodeByContextPathSelector = selectors.CR.Nodes.makeGetNodeByContextPathSelector(feedbackPayload.contextPath);
        const node = getNodeByContextPathSelector(state);
        const nodeTypeName = node?.nodeType;

        if (nodeTypeName === this.props.preset.newNodeType) {
            this.refreshFlatNav();
        }
    }

    buildNewReferenceNodePath = () => {
        const context = this.props.siteNodeContextPath.split('@')[1];
        return this.props.newReferenceNodePath + '@' + context;
    };

    createNode = () => {
        const contextPath = this.buildNewReferenceNodePath();
        this.props.commenceNodeCreation(contextPath, undefined, 'into', this.props.preset.newNodeType || undefined);
    }

    refreshFlatNav = () => {
        this.props.resetNodes();
    }

    getNodeIconComponent(node) {
        const nodeTypeName = node?.nodeType;
        const nodeType = this.props.nodeTypesRegistry.getNodeType(nodeTypeName);
        const isHidden = node?.properties?._hidden;
        const isHiddenBefore = node?.properties?._hiddenBeforeDateTime;
        const isHiddenAfter = node?.properties?._hiddenAfterDateTime;
        const nodeTypeIcon = nodeType?.ui?.icon;

        if (isHidden) {
            return (
                <span className="fa-layers fa-fw">
                    <Icon icon={nodeTypeIcon} className={style.baseIcon} />
                    <Icon icon="circle" color="error" transform="shrink-3 down-6 right-4" />
                    <Icon icon="times" transform="shrink-7 down-6 right-4" />
                </span>
            );
        }

        if (isHiddenBefore || isHiddenAfter) {
            return (
                <span className="fa-layers fa-fw">
                    <Icon icon={nodeTypeIcon} className={style.baseIcon} />
                    <Icon icon="circle" color="primaryBlue" transform="shrink-5 down-6 right-4" />
                    <Icon icon="clock" transform="shrink-9 down-6 right-4" />
                </span>
            );
        }

        return (
            <Icon icon={nodeTypeIcon} className={style.baseIcon} />
        );
    }

    renderNodes = () => {
        if (this.props.searchTerm && !this.props.isLoading &&  this.props.nodes.length === 0) {
            return <span className={style.toolbarSearchNoResults}>{this.props.i18nRegistry.translate('Psmb.FlatNav:Main:noResults')}</span>
        }
        return this.props.nodes
            .map(contextPath => {
                const item = this.props.nodeData?.[contextPath];

                if (item) {
                    const isFocused = this.props.focused === contextPath;
                    const isDirty = this.props.publishableNodes.filter(i => (
                        i?.contextPath === contextPath ||
                        i?.documentContextPath === contextPath
                    )).length > 0;
                    const isRemoved = item?.properties?._removed;
                    const nodeIconComponent = this.getNodeIconComponent(item);
                    const nodeItemClassNames = mergeClassNames({
                        [style.node]: true,
                        [style.nodeFocused]: isFocused,
                        [style.nodeDirty]: isDirty,
                        [style.nodeRemoved]: isRemoved
                    })

                    return (
                        <div
                            className={nodeItemClassNames}
                            key={contextPath}
                            onClick={() => {
                                if ( ! isRemoved) {
                                    this.props.setSrc(item?.uri);
                                    this.props.focus(contextPath);
                                }
                            }}
                            role="button"
                            >
                            <div
                                className={style.nodeIconWrapper}>
                                {nodeIconComponent}
                            </div>
                            <span
                                className={style.nodeLabel}>
                                {item?.label}
                            </span>
                        </div>
                    );
                }
                return null;
            }).filter(i => i);
    };

    render() {
        const {focused, nodes, isLoadingReferenceNodePath, isLoading, preset, isAllowedToAddChildOrSiblingNodes, canBeDeleted, canBeEdited} = this.props;

        const focusedInNodes = nodes.includes(focused);

        const searchEnabled = Boolean(preset.searchQuery)

        return (
            <div className={style.pageTreeContainer}>
                <div className={style.toolbar}>
                    <div className={style.toolbarButtons}>
                        <IconButton icon="plus" disabled={isLoadingReferenceNodePath || !isAllowedToAddChildOrSiblingNodes} onClick={this.createNode}/>
                        <HideSelectedNode disabled={!focusedInNodes || !canBeEdited}/>
                        <DeleteSelectedNode disabled={!focusedInNodes || !canBeDeleted || !canBeEdited}/>
                        <RefreshNodes disabled={isLoading || isLoadingReferenceNodePath} onClick={this.refreshFlatNav}/>
                    </div>
                    {searchEnabled && <SearchInput searchTerm={this.props.searchTerm} onChange={this.props.setSearchTerm} placeholder={this.props.i18nRegistry.translate('Psmb.FlatNav:Main:search')}/>}
                </div>

                <div className={style.treeWrapper}>
                    {this.renderNodes()}
                    {(isLoading || (!this.props.preset.disablePagination && this.props.moreNodesAvailable && !this.props.searchTerm)) && (<Button
                        onClick={() => this.props.fetchNodes(true)}
                        style="clean"
                        className={style.loadMoreButton}
                        disabled={isLoading}
                    >
                        <div style={{textAlign: 'center'}}>
                            <Icon
                                spin={isLoading}
                                icon={isLoading ? 'spinner' : 'angle-double-down'}
                            />
                            &nbsp;{isLoading ? this.props.i18nRegistry.translate('Psmb.FlatNav:Main:loading') : this.props.i18nRegistry.translate('Psmb.FlatNav:Main:loadMore')}
                        </div>
                    </Button>)}
                </div>
            </div>
        );
    }
}
