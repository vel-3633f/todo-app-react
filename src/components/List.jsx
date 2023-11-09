import React from "react";
import Todo from "./Todo";

const List = ({ todos,toggleTodo }) => {
  // const newTodos = [...todos];
  //   const todo = newTodos.find((todo) => todo.id === id);
  //   todo.completed = !todo.completed;
  // setTodos(newTodos);

  return (
    <div className="w-4/5">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />;
      })}
    </div>
  );
};

export default List;
