import {Component, log} from "../../../framework";
import './tabs-page.component.scss';


class TabsPageComponent extends Component {
    constructor(config) {
        super(config);
        this.data={
            tab1:'tab one'
        }
    }

    events() {
        return {
            'click .tabs-page': 'onClickTabs',
        }
    }

    onClickTabs(e){
        if(e.target.matches(".tabs li button")){
            const li = e.target.parentNode;
            const lis = document.querySelectorAll(".tabs li");
            lis.forEach(li=>li.classList.remove("active"));
            li.classList.add("active");
        }
    }


}


const tabsPageComponent = new TabsPageComponent({
    selector: "app-tabs-page",
    template:
        `<div class="tabs-page"> 
                <h1>tabs page component works!</h1>
                <ul class="tabs">
                    <li class="active"><button  data-id="tab1">one</button></li>
                    <div class="content" data-id="tab1"><h2>{{tab1}}</h2></div>
                    <li><button data-id="tab2">two</button></li>
                    <div class="content" data-id="tab2"><h2>two</h2></div>
                    <li><button data-id="tab3">three</button></li>
                    <div class="content" data-id="tab3"><h2>three</h2></div>
                </ul>
         </div>`
});


export {tabsPageComponent}
