import React from "react";

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addItemEvent}>
            <input 
            type="text" 
            placeholder="...todo" 
            value={props.newItem} 
            onChange={props.handleInputChange} />
            {/*console.log("todo form props", props)*/}
            <button >Add Item</button>
            </form> 
        
        <button>Remove Completed Items</button></div>
    
    )
}


export default TodoForm;