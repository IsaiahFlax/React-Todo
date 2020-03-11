import React from "react"
import styled from "styled-components"

const StylesP = styled.p`
${props => props.completed ? `}
text-decoration: line-through;
` : `
text-decoration: none;
`}
`
const Todo = props => {
    return (
<div 
    onClick={props.toggleCompleted(props.task.id)}>
<StylesP>{props.task.task}</StylesP>
{console.log("TOdo.js props", props.task.task)}
</div>
    )
    
}

export default Todo;