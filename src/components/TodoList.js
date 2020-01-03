import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'
import {connect} from 'react-redux';

const FormGroup = styled.div`
    margin-top: 10px;
`;
const Ul = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const TodoList = ({ 
    txtName, todos, dispatch, toggleTodo, 
    handleChangeInputTodo, handleClickAddTodo, handleKeyAddTodo, handleClickEditTodo, 
    handleChangeInputEditTodo, handleKeySubmit, handleClickDeleteTodo, handleDoubleClickEditTodo, handleBlur
}) => {
    return (
        <>
            <h1>Todo List</h1>
            <FormGroup>
                <input type="text" 
                    onChange={(evt) => handleChangeInputTodo(evt.target.value)} 
                    onKeyDown={(evt) => handleKeyAddTodo(evt.keyCode)} value={txtName}
                />
                <button onClick={() => handleClickAddTodo()}>Add</button>
            </FormGroup>
            <FormGroup>
                <Ul>
                    {todos.map(todo =>
                        <Todo 
                            key={todo.id}
                            {...todo}
                            handleClick={() => dispatch(toggleTodo(todo.id))}
                            handleClickEditTodo={handleClickEditTodo}
                            handleChangeInputTodo={handleChangeInputTodo}
                            handleChangeInputEditTodo={handleChangeInputEditTodo}
                            handleKeySubmit={handleKeySubmit}
                            handleClickDeleteTodo={handleClickDeleteTodo}
                            handleBlur={handleBlur}
                        />
                    )}
                </Ul>
            </FormGroup>
        </>
    )
}

export default connect()(TodoList) ;