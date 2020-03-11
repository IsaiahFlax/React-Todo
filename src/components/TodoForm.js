import React from "react";

const TodoForm = props => {
    
    
    console.log('todo form props', props)
    
    return (
        <div>
           <form 
           onSubmit={props.handleAddItem}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          placeholder={props.placeholder}
          value={props.newItem}
          onChange={props.handleChanges}
        />
        <button>Add</button>
      </form>
        
        </div>
    
    )
}


export default TodoForm;