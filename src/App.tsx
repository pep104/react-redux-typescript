import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <h1>Пользователи:</h1>
      <UserList/>
      <h1>Список дел:</h1>
      <TodoList/>
      
    </div>
  );
}

export default App;
