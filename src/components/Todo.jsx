import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div className="text-gray-700 flex items-center justify-between mb-1 w-full">
      <input
        type="checkbox"
        onChange={handleTodoClick}
        readOnly
        checked={todo.completed}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-3"
      />
      <label className="text-base w-full">{todo.content}</label>
    </div>
  );
};

export default Todo;
