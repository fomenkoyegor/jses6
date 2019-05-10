import './header.component.scss';
import {Component} from "../../framework";

class HeaderComponent extends Component {
    constructor(config) {
        super(config)
    }
}


const headerComponent = new HeaderComponent({
    selector: "app-header",
    template:
        `<div class="header"> 
               <nav>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#tabs">tabs</a></li>
                    </ul>
               </nav>
         </div>`
});


export {headerComponent}
