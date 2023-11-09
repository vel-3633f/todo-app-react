import { useState } from "react";

const Form = ({ createTodo, todos, setTodos, count}) => {
  const [enteredTodo, setEnterTodo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const addTodo = () => {
    if (enteredTodo !== "") {
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
        completed: false,
      };
      createTodo(newTodo);
      setEnterTodo("");
      setErrorMsg("");
    } else {
      setErrorMsg("タスク名を入力してください");
    }
  };

  const deleteTodo = () => {
    const filterTodos = todos.filter((todo) => {
      return !todo.completed;
    });
    console.log(filterTodos);
    setTodos(filterTodos);
  };

  return (
    <>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnterTodo(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="タスクを入力してください"
      />
      <p className="text-red-600">{errorMsg}</p>
      <button
        onClick={addTodo}
        className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2 my-3"
      >
        タスクを追加する
      </button>
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
