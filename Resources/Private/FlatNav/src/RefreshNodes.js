import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import {neos} from '@neos-project/neos-ui-decorators';
import {IconButton} from '@neos-project/react-ui-components';
import style from './style.css';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))

export default class RefreshNodes extends PureComponent {
    static propTypes = {
        node: PropTypes.object,
        className: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
        i18nRegistry: PropTypes.object.isRequired
    };

    handleClick = () => {
        const {onClick} = this.props;

        onClick();
    }

    render() {
        const {disabled, className, i18nRegistry} = this.props;
        const finalClassName = mergeClassNames({
            [className]: className && className.length
        });

        return (
            <IconButton
                className={finalClassName}
                disabled={disabled}
                onClick={this.handleClick}
                icon="sync"
                hoverStyle="clean"
                title={i18nRegistry.translate('refresh')}
            />
        );
    }
}
