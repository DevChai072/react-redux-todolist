const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    editing: false,
                    txtEditName: ""
                }
            ]

        case 'EDIT_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            )
        
            case 'EDITING_TODO':
                return state.map(todo => 
                    (todo.id === action.id)
                        ? {...todo, 
                            txtEditName: action.txtEditName,
                            editing: action.editing}
                        : todo
                )

        case 'DELETE_TODO':
            return state.filter(todo => 
                todo.id !== action.id
            )

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )

        default:
            return state
    }
}
export default todos