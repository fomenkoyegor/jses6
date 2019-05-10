import {router} from "framework/utils/router";
import {isUndefined, log} from "framework/utils/log";
import {renderComponent} from "framework/utils/render-component";

function renderRoute(){
    const url = router.getUrl();
    let route = this.routes.find(r => r.path === url);
    if (isUndefined(route)) {
        log(`route ${url} not found`);
        route = this.routes.find(r => r.path === "**");
    }
    document.querySelector("router-outlet")
        .innerHTML = `<${route.component.selector}></${route.component.selector}>`;
    renderComponent(route.component);
}


export {renderRoute}
