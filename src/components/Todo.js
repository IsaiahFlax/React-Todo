import React from "react"

const Todo = props => {
    return (
<div>
<p>{props.listItems.task}</p>
<p>{props.listItems.id}</p>
<p>{props.listItems.completed}</p>
</div>
    );
}

export default Todo;