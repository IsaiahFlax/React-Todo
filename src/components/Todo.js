import React from "react"
import styled from "styled-components"

const StylesP = styled.p`
${props => props.props.task.completed ? `
text-decoration: line-through;
` : `
text-decoration: none;
${console.log("styled props", props.props.task.completed)}
`}
`
const Todo = props => {
    return (
<div 
    onClick={e => props.toggleCompleted(props.task)}>
<StylesP props={props}>{props.task.task}</StylesP>
</div>
    )
    
}

export default Todo;