import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
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
    static propTypes = {
        node: PropTypes.object,
        className: PropTypes.string,
        commenceNodeRemoval: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
        i18nRegistry: PropTypes.object.isRequired
    };

    handleDeleteSelectedNodeClick = () => {
        const {node, commenceNodeRemoval} = this.props;
        commenceNodeRemoval($get('contextPath', node));
    }

    render() {
        const {className, disabled, i18nRegistry} = this.props;

        return (
            <IconButton
                className={className}
                disabled={disabled}
                onClick={this.handleDeleteSelectedNodeClick}
                icon="trash"
                hoverStyle="clean"
                title={i18nRegistry.translate('delete')}
            />
        );
    }
}
