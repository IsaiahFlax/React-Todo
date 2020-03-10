import React from "react";

const TodoForm = props => {
    return (
        <div>
            <input type="text" placeholder="...todo" value={props.newItem} onChange={props.handleInputChange} />
            {/*console.log("todo form props", props)*/}
            <button  onClick={props.onClickEvent}>Add Item</button>
            <br /><br /><button>Remove Completed Items</button>
        </div>
    )
}


export default TodoForm;