import { useState } from "react";
import List from "./List";
import Form from "./Form";

const ToDoList = () => {
  const firstTodos = [
    {
      id: 1,
      content: "宝くじを買う",
      completed: false,
    },
    {
      id: 2,
      content: "ラーメンを食べる",
      completed: true,
    },
  ];
  let [todos, setTodos] = useState(firstTodos);

  const createTodo = (todo) => {
    return setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    //クリックしたら、todo.completedが反転。チェックしているはtodo.completedの値次第。
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <div className="w-72 sm:w-80 h-4/5 border border-black rounded-md">
      <h1 className="bg-blue-500 text-white h-20 text-3xl flex items-center justify-center">Todo App</h1>
      <div className="flex items-center flex-col py-6">
      <Form createTodo={createTodo} todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default ToDoList;
