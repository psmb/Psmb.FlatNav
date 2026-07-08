import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {neos} from '@neos-project/neos-ui-decorators';
import {IconButton} from '@neos-project/react-ui-components';

import {selectors, actions} from '@neos-project/neos-ui-redux-store';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))
@connect(state => ({
    node: selectors.CR.Nodes.focusedSelector(state)
}), {
    hideNode: actions.CR.Nodes.hide,
    showNode: actions.CR.Nodes.show
})
export default class HideSelectedNode extends PureComponent {
    static propTypes = {
        node: PropTypes.object,
        className: PropTypes.string,
        hideNode: PropTypes.func.isRequired,
        showNode: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
        i18nRegistry: PropTypes.object.isRequired
    };

    handleHideNode = () => {
        const {node, hideNode} = this.props;

        hideNode(node?.contextPath);
    }

    handleShowNode = () => {
        const {node, showNode} = this.props;

        showNode(node?.contextPath);
    }

    render() {
        const {className, disabled, node, i18nRegistry} = this.props;
        const isHidden = node?.properties?._hidden;

        return (
            <IconButton
                className={className}
                disabled={disabled}
                isActive={isHidden}
                onClick={isHidden ? this.handleShowNode : this.handleHideNode}
                icon="eye-slash"
                hoverStyle="clean"
                title={i18nRegistry.translate('hideUnhide')}
            />
        );
    }
}
