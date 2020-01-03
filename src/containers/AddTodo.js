import React, { Component } from 'react'
import {connect} from 'react-redux';
import TodoList from '../components/TodoList'
import {addTodo, editTodo, deleteTodo, editingTodo} from '../actions/TodoAction'
import {toggleTodo} from '../actions/TodoAction'

class AddTodo extends Component {

    state = {
        txtName: ""
    }
    
    handleChangeInputTodo = (value) => {
        this.setState({
            txtName: value
        })
    }

    handleChangeInputEditTodo = (id, value, editing) => {
        this.props.dispatch(editingTodo(id, value, editing))
    }

    handleClickAddTodo = () => {
        const txtName = this.state.txtName
        if (txtName.length > 0) {
            this.props.dispatch(addTodo(txtName))
            this.setState({txtName: ""})
        }
    }

    handleKeyAddTodo = (keyCode) => {
        const txtName = this.state.txtName
        if (txtName.length > 0 && keyCode === 13) {
            this.props.dispatch(addTodo(txtName))
            this.setState({txtName: ""})
        }
    }

    handleClickEditTodo = (id, txtEditName, editing) => {
        this.props.dispatch(editingTodo(id, txtEditName, editing = !editing))
    }

    handleKeySubmit = (id, keyCode, txtEditName, editing) => {
        if (txtEditName.length > 0 && keyCode === 13) {
            this.props.dispatch(editTodo(id, txtEditName))
            this.props.dispatch(editingTodo(id, txtEditName = "", editing = !editing))
        }
        else if (keyCode === 27) {
            this.props.dispatch(editingTodo(id, txtEditName, editing = !editing))
        }
    }

    handleClickDeleteTodo = (id) => {
        if (window.confirm("ต้องการลบข้อมูลไช่หรือไม่")) {
            this.props.dispatch(deleteTodo(id))
        }
    }

    handleBlur = (id, txtEditName, editing) => {
        this.props.dispatch(editingTodo(id, txtEditName, editing = !editing))
    }

    render() {
        const {txtName} = this.state
        const {todos} = this.props
        return (
            <TodoList 
                txtName={txtName}
                todos={todos}
                toggleTodo={toggleTodo}
                handleClickAddTodo={this.handleClickAddTodo}
                handleChangeInputTodo={this.handleChangeInputTodo}
                handleKeyAddTodo={this.handleKeyAddTodo}
                handleClickEditTodo={this.handleClickEditTodo}
                handleChangeInputEditTodo={this.handleChangeInputEditTodo}
                handleKeySubmit={this.handleKeySubmit}
                handleClickDeleteTodo={this.handleClickDeleteTodo}
                handleBlur={this.handleBlur}
            />
        )
    }
}

const mapStateToProps = (state) =>  ({
	message: 'This is message from mapStateToProps',
	todos: state.todos
})

export default connect(mapStateToProps)(AddTodo) ;