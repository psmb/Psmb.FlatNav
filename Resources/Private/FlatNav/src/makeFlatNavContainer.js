import React, {Component} from 'react';
import {$get, $transform} from 'plow-js';
import {Tabs} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';
import {actions} from '@neos-project/neos-ui-redux-store';
import {neos} from '@neos-project/neos-ui-decorators';
import {fetchWithErrorHandling} from '@neos-project/neos-ui-backend-connector';
import FlatNav from './FlatNav';

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
                            newReferenceNodePath
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
                            <Tabs.Panel key={presetName} icon={preset.icon} tooltip={this.props.i18nRegistry.translate(preset.label)}>
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
        options: globalRegistry.get('frontendConfiguration').get('Psmb_FlatNav'),
        i18nRegistry: globalRegistry.get('i18n')
    }))(connect($transform({
        siteNodeContextPath: $get('cr.nodes.siteNode')
    }), {
        merge: actions.CR.Nodes.merge
    })(FlatNavContainer));
};

export default makeFlatNavContainer;
