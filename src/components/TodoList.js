import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div>
            <br />
    <button onClick={props.clearCompleted}>Clear Completed Tasks</button>        
    <h1>TodoList</h1>
    {props.listItems.map(items => (/*(console.log("todolist items", items),*/
    <Todo 
        task={items} 
        key={items.id} 
        toggleCompleted={props.toggleCompleted} />
    ))}
    </div>
    )}




export default TodoList;