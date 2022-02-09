export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum TodoActionType {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoActions {
    type: TodoActionType.FETCH_TODOS
}

interface FetchTodoSuccessActions {
    type: TodoActionType.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface FetchTodoErrorActions {
    type: TodoActionType.FETCH_TODOS_ERROR,
    payload: string
}

interface SetTodoPage {
    type: TodoActionType.SET_TODO_PAGE,
    payload: number
}

export type TodosAction = FetchTodoActions | FetchTodoSuccessActions | FetchTodoErrorActions | SetTodoPage
