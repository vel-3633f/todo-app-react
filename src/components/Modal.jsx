import { useState } from "react";

const Modal = ({ handleCloseClick, createTodo, countCheck }) => {
  const [enteredTodo, setEnterTodo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const addTodo = () => {
    if (enteredTodo !== "") {
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
        completed: false,
      };
      countCheck();
      createTodo(newTodo);
      setEnterTodo("");
      setErrorMsg("");
      handleCloseClick()
    } else {
      setErrorMsg("タスク名を入力してください");
    }

  };

  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-60 w-screen h-screen z-10 flex justify-center items-center">
      <div className="bg-white w-64 h-72 rounded-3xl flex flex-col items-center pt-6 relative">
        <h1 className="text-blue-500 text-2xl mb-3">新規登録</h1>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnterTodo(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
          placeholder="タスクを入力してください"
        />
        <p className="text-red-600">{errorMsg}</p>
        <div className="flex justify-center absolute bottom-4 right-4">
          <button
            onClick={addTodo}
            className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2 mr-2"
          >
            追加
          </button>
          <button type="button" onClick={handleCloseClick} className="bg-gray-400 hover:bg-gray-300 text-white rounded px-4 py-2">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
