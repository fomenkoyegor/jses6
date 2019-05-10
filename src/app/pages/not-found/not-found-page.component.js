import {Component} from "../../../framework";
import './not-found-page.component.scss';
class NotFoundPageComponent extends Component{
    constructor(config){
        super(config)
    }
}


const notFoundPageComponent = new NotFoundPageComponent({
    selector: "app-not-found-page",
    template:
        `<div class="not-found-page"> 
                <h1>404 page not found</h1>
                <p><a href="#">home</a></p>
         </div>`
});


export {notFoundPageComponent}
