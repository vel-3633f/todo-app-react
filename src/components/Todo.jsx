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
        id={todo.id}
        checked={todo.completed}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  mr-3 cursor-pointer"
      />
      <label className="text-base w-full cursor-pointer" for={ todo.id}>{todo.content}</label>
    </div>
  );
};

export default Todo;
