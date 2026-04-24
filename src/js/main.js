import '../../src/styles/main.scss';

import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js';
import BurgerMenu from './components/burgerMenu.js';
import TabsCollection from './components/tabs.js';

defineScrollBarWidthCSSVar();
new BurgerMenu();
new TabsCollection();
