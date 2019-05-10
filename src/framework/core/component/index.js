import {isUndefined,log} from "../../utils/log";

class Component {
    constructor(config) {
        const {selector, template} = config;
        this.selector = selector;
        this.template = template;
        this.el = null;
    }

    render() {
        this.el = document.querySelector(this.selector);
        if (!this.el) throw new Error(`component with selector ${this.selector} not found`);
        this.el.innerHTML = compileTemplate(this.template,this.data);

        this._initEvents()
    }


    _initEvents() {
        if (isUndefined(this.events)) return;
        let events = this.events();
        Object.keys(events).forEach(key => {
            let listener = key.split(" ");
            this.el
                .querySelector(listener[1])
                .addEventListener(listener[0], this[(events[key])].bind(this))
        })
    }
}

function compileTemplate(template, data) {

    if(isUndefined(data)) return template;
    let regex = /\{{(.*?)}}/g;

    template = template.replace(regex,(str,d)=>{
        let key = d.trim();
        return data[key];
    });

    return template;
}


export {Component}
