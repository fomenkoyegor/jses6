import {Module} from "framework";
import {appComponent} from "./app.component";
import {headerComponent} from "./header/header.component";
import {routes} from "./routes";

class AppModule extends Module{
    constructor(config){
        super(config)
    }
}

const appModule = new AppModule({
    components:[
        headerComponent
    ],
    bootstrap:appComponent,
    routes:routes
});

export {appModule}
