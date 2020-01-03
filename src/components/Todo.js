import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    display: grid;
    grid-template-columns: 80% 10% 10%;
    border: 1px solid;
    margin-top: -1px;
    padding: 10px;
    background-color: #f6f6f6;
`;

const Todo = ({
    id, text, completed, editing, txtEditName, 
    handleClick, handleClickEditTodo, handleChangeInputEditTodo, handleKeySubmit, handleClickDeleteTodo, handleBlur
}) => {
    let textDecoration
    let backgroundColor
    if (completed) {
        backgroundColor = "red"
        textDecoration = "line-through"
    } else {
        backgroundColor = ""
        textDecoration = "none"
    }

    let element
    if (editing) {
        element = (
            <Li>
                <input type="text" 
                    onChange={(evt) => handleChangeInputEditTodo(id, evt.target.value, editing)}
                    onKeyDown={(evt) => handleKeySubmit(id, evt.keyCode, txtEditName, editing)}
                    autoFocus={true}
                    onBlur={() => handleBlur(id, text, editing)}
                    value={txtEditName}
                />
            </Li>
        )
    } else {
        element = (
            <Li style={{backgroundColor: backgroundColor}}>
                <label style={{float: "left", textDecoration: textDecoration}} 
                    onClick={handleClick}>
                    {text}
                </label>
                <button style={{float: "right"}} onClick={() => handleClickEditTodo(id, text, editing)}>Edit</button>
                <button style={{float: "right"}} onClick={() => handleClickDeleteTodo(id)}>Delete</button>
            </Li>
        )
    }

    return (
        <>
            {element}
        </>
    )
}
export default Todo