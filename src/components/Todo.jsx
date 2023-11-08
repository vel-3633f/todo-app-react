import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={handleTodoClick}
        readOnly
        checked={todo.completed}
      />
      <label>{todo.content}</label>
    </div>
  );
};

export default Todo;
