import manifest from '@neos-project/neos-ui-extensibility';
import FlatNavContainer from './FlatNav';

manifest('Psmb.FlatNav:FlatNav', {}, globalRegistry => {
    const containerRegistry = globalRegistry.get('containers');
    containerRegistry.set('LeftSideBar/Top/PageTreeToolbar', () => null);
    containerRegistry.set('LeftSideBar/Top/PageTreeSearchbar', () => null);
    containerRegistry.set('LeftSideBar/Top/PageTree', FlatNavContainer);
});
