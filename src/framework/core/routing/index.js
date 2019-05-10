
import {renderRoute} from "framework";

class RoutingModule {
    constructor(routes) {
        this.routes = routes;
    }

    init() {
        window.addEventListener("hashchange", renderRoute.bind(this));
        renderRoute.call(this)
    }


}





export {RoutingModule}
