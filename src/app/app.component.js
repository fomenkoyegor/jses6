import {Component} from "framework";


class AppComponent extends Component {
    constructor(config) {
        super(config);
    }
}


const appComponent = new AppComponent({
    selector: "app-root",
    template:
        `
            <app-header></app-header>    
            <router-outlet></router-outlet>
         `
});


export {appComponent}
