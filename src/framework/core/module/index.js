import {renderComponent,initRouting} from "framework";


class Module {

    constructor(config) {
        const {components, bootstrap, routes} = config;
        this.components = components;
        this.bootstrapComponent = bootstrap;
        this.routes = routes;
    }

    start() {
        this.initComponents();
        initRouting(this.routes)
    }

    initComponents() {
        this.bootstrapComponent.render();
        this.components.forEach(renderComponent)
    }


}



export {Module};
