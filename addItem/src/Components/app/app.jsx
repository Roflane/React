import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css"
import ItemAddForm from "../item-add-forms";

export default class App extends Component {
    state = {
        todos:[
            {label: "Do chores", important: false, id: 1},
            {label: "Break economics of yet another mmo", important: true, id: 2},
            {label: "Care about dynamic-typed languages", important: false, id: 3},
            {label: "Lead a C program to sigsegv", important: false, id: 4}
        ]
    }
    onItemDelete = (id) => {
       this.setState(({todos})=> {
           const index = todos.findIndex(item => item.id === id);
           const newTodos = [
               ...todos.slice(0,index),
               ...todos.splice(index+1)
           ];
           return {newTodos}
       });
    }
    onItemAdd = () => {
        this.setState(({todos}) => {
            const targetLabel = "Hello World!";
            const exists = todos.some(todo => todo.label === targetLabel);
            if (exists) { return todos }

            const newToDo = {
                label: "Hello World!",
                important: false,
                id: todos[todos.length - 1].id + 1,
            }
            todos.push(newToDo);
            return {...todos, newToDo}
        });
    }
    render() {
        return (
            <div className="App">
                <AppHeader todo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todos}
                    onDeleted={this.onItemDelete}/>
                <ItemAddForm onItemAdd={this.onItemAdd} />
            </div>
        )
    }
}