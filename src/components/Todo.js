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
<div>
<StylesP onClick={props.toggleCompleted, console.log(props.completed)}>{props.task}</StylesP>

</div>
    )
}

export default Todo;