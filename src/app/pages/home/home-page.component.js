import {Component, router, log, http} from "../../../framework";
import './home-page.component.scss'

class HomePageComponent extends Component {
    constructor(config) {
        super(config);
        this.data = {
            name: 'home page',
            id: 1,
            todos:null
        }
    }

    onInit() {
        log("home page init");

    }

    afterInit() {
        log(" home pagr after init")
        http.get('https://jsonplaceholder.typicode.com/todos/')
            .then(todos=>{
                this.data.todos = todos;
                const todosBlock = document.querySelector('.todos');
                this.data.todos.forEach(todo=>{
                   const todoBlock = `<div class="todo">${todo.title}</div>`;
                   todosBlock.innerHTML  += todoBlock;
                });
                // this.render()
            })
    }

    events() {
        return {
            'click .navigate': 'onGoTo',
        }
    }

    onGoTo(e) {
        const link = e.target.dataset.link;
        router.navigate(link);
    }

}

const homePageComponent = new HomePageComponent({
    selector: "app-home-page",
    template:
        `<div class="home-page"> 
                <h1>home page component works!</h1>
                <p>data: {{name}} |  id: {{id}}</p>
                <p>
                    <button class="navigate" data-link="#tabs">go to tabs</button>
                </p>
                <div class="todos">
                    
                </div>
         </div>`
});


export {homePageComponent}
