import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  return (
    <div>
      <h1>todo</h1>
      {todo.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </div>
  );
};

export default Todo;
