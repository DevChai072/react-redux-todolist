let nextTodoId = 1
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id, text
})

export const editingTodo = (id, txtEditName, editing) => ({
    type: 'EDITING_TODO',
    id, txtEditName, editing
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})