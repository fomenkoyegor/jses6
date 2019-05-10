import {isUndefined} from "framework/utils/log";
import {RoutingModule} from "framework/core/routing";

const initRouting = (routes) => {
    if (isUndefined(routes)) return;
    let routing = new RoutingModule(routes);
    routing.init();
};

export {initRouting}
