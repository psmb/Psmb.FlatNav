import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {$transform, $get} from 'plow-js';
import {neos} from '@neos-project/neos-ui-decorators';
import {IconButton} from '@neos-project/react-ui-components';
import {selectors, actions} from '@neos-project/neos-ui-redux-store';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
@connect($transform({
    node: selectors.CR.Nodes.focusedSelector
}), {
    commenceNodeRemoval: actions.CR.Nodes.commenceRemoval
})
export default class DeleteSelectedNode extends PureComponent {
    handleDeleteSelectedNodeClick = () => {
        const {node, commenceNodeRemoval} = this.props;
        commenceNodeRemoval($get('contextPath', node));
    }

    render() {
        const {className, i18nRegistry} = this.props;

        return (
            <IconButton
                className={className}
                onClick={this.handleDeleteSelectedNodeClick}
                icon="trash"
                hoverStyle="clean"
                title={i18nRegistry.translate('delete')}
            />
        );
    }
}
