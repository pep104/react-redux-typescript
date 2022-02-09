import { TodoActionType, TodosAction, TodoState } from "../../types/todo"

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 0
}

export const todoReducer = (state = initialState, action: TodosAction): TodoState => {
    switch(action.type){
        case TodoActionType.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionType.FETCH_TODOS_ERROR:
            return {...state, error: action.payload, loading: false}
        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionType.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}