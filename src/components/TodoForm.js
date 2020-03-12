import React from "react";

const TodoForm = props => {
    
    
    console.log('todo form props', props)
    
    return (
        <div>
           <form 
           onSubmit={props.handleAddItem}>
             <div className="field-group">
               {//<label className={props.fieldActive ? "field-active" : ""}>...todo</label>}
}
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          className="floating-label"
          type="text"
          name="item"
          placeholder={props.placeholder}
          value={props.newItem}
          onChange={props.handleChanges}
          onFocus={props.activateField}
          onBlur={props.disableField}
        />
        <button>Add</button>
        </div>
      </form>
        
        </div>
    
    )
}


export default TodoForm;