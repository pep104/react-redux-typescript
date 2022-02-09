import React, { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { fetchTodos } from "../store/action-creators/todo";

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypesSelector(state => state.todo)

    const pages = [1, 2, 3, 4, 5]
    const {fetchTodos, SetTodoPage} = useAction()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading){
        <div>
            Загрузка...
        </div>
    }
    
    if(error){
        <div>
            {error}
        </div>
    }
    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            
            <div style={{display: 'flex'}}>
                {pages.map(p => 
                    <div 
                    onClick={() => SetTodoPage(p)}
                    style={{border:p === page ? '3px solid pink' : '1px solid gray', padding: 10}}>
                        {p}
                    </div>)}
            </div>

            
        </div>
    )
}

export default TodoList