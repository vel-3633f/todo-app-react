import { useState } from "react";
import List from "./List";
import Form from "./Form";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
  const containerStart = document.querySelector("#start");
  return createPortal(children, containerStart);
};

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
      completed: false,
    },
  ];
  let [todos, setTodos] = useState(firstTodos);
  let [count, setCount] = useState(2);

  const createTodo = (todo) => {
    return setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    //クリックしたら、todo.completedが反転。チェックしているはtodo.completedの値次第。
    todo.completed = !todo.completed;

    const countCheck = todos.filter((todo) => {
      return !todo.completed;
    }).length;
    setCount(countCheck);
    setTodos(newTodos);
  };

  const countCheck = () => {
    //カウント
    const countCheck = todos.filter((todo) => {
      return !todo.completed;
    }).length;
    setCount(countCheck + 1);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-72 sm:w-80 h-4/5 border border-black rounded-md relative">
      <div id="start"></div>
      <h1 className="bg-blue-500 text-white h-20 text-3xl flex items-center justify-center">
        Todo App
      </h1>
      <div className="flex items-center flex-col py-6">
        <Form todos={todos} setTodos={setTodos} count={count} />
        <List todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
      </div>
      <div>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          disabled={modalOpen}
          className="w-10 h-10  bg-blue-400 text-2xl text-white font-semibold rounded-full hover:bg-blue-500 absolute right-2 bottom-3 z-0"
        >
          +
        </button>
        {modalOpen && (
          <ModalPortal>
            <Modal
              handleCloseClick={() => setModalOpen(false)}
              createTodo={createTodo}
              countCheck={countCheck}
            />
          </ModalPortal>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
