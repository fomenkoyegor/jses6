import {homePageComponent} from "../pages/home/home-page.component";
import {tabsPageComponent} from "../pages/tabs/tabs-page.component";
import {notFoundPageComponent} from "../pages/not-found/not-found-page.component";

const routes = [
    {path: '', component: homePageComponent},
    {path: 'tabs', component: tabsPageComponent},
    {path: '**', component: notFoundPageComponent}
];


export {routes}
