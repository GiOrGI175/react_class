import React, { useState } from 'react';
import Todo from './Todo';

const TodoParent = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Explore advanced React topics', completed: false },
  ]);

  const toggleTodo = (id) => {
    console.log(id);

    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodo(newTodos);
  };

  return (
    <div>
      <h1>Todo Parens</h1>
      <Todo todo={todo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoParent;
