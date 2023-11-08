import { useState } from "react";

const Form = ({ createTodo, todos,setTodos }) => {
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
      return !todo.completed
    })
  console.log(filterTodos)
    setTodos(filterTodos)
  }

  

  return (
    <>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnterTodo(e.target.value)}
      />
      <button onClick={addTodo}>タスクを追加する</button>
      <button onClick={deleteTodo}>完了したタスクを削除</button>
      <p>{errorMsg}</p>
      <div>残りのタスク:{todos.length}</div>
    </>
  );
};

export default Form;
