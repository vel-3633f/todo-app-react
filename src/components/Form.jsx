import { useState } from "react";

const Form = ({ todos, setTodos, count }) => {
  

  

  const deleteTodo = () => {
    const filterTodos = todos.filter((todo) => {
      return !todo.completed;
    });
    console.log(filterTodos);
    setTodos(filterTodos);
  };

  return (
    <>
      
      
      <button
        onClick={deleteTodo}
        className="bg-red-400 hover:bg-red-300 text-white rounded px-4 py-2"
      >
        完了したタスクを削除
      </button>

      <div className="text-gray-500 mb-5">残りのタスク:{count}</div>
    </>
  );
};

export default Form;
