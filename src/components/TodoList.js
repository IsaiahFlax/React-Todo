import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div>
    <h1>TodoList</h1>
    {props.listItems.map(items =>(<Todo listItems={items}/>))};
    </div>
    );
}
    console.log("todolist props");



export default TodoList;