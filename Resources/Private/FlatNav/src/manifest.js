import React from 'react';
import manifest from '@neos-project/neos-ui-extensibility';
import makeFlatNavContainer from './makeFlatNavContainer';
import style from './style.css';

manifest('Psmb.FlatNav:FlatNav', {}, globalRegistry => {
    const containerRegistry = globalRegistry.get('containers');
    const PageTreeToolbar = containerRegistry.get('LeftSideBar/Top/PageTreeToolbar');
    const PageTreeSearchbar = containerRegistry.get('LeftSideBar/Top/PageTreeSearchbar');
    const PageTree = containerRegistry.get('LeftSideBar/Top/PageTree');

    const OriginalTree = () => (
        <div className={style.pageTreeContainerOriginal}>
            <div className={style.pageTreeToolbarOriginal}>
                <PageTreeToolbar/>
            </div>
            <PageTreeSearchbar/>
            <PageTree/>
        </div>
    );
    containerRegistry.set('LeftSideBar/Top/PageTreeToolbar', () => null);
    containerRegistry.set('LeftSideBar/Top/PageTreeSearchbar', () => null);

    containerRegistry.set('LeftSideBar/Top/PageTree', makeFlatNavContainer(OriginalTree));
});
