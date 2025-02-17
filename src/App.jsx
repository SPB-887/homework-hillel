import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

export function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function inputHandler(event) {
    setText(event.target.value);
  }

  function addNewTodo() {
    if (text !== "") {
      const id = uuid();
      const newTodoList = [{ id, value: text }, ...todo];

      setTodo(newTodoList);
      setText("");
    }
  }

  return (
    <div>
      <h2>Todo list</h2>
      <div className="input-wrapper">
        <input type="text" onChange={inputHandler} value={text} />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todo.map(function (obj, i) {
          return (
            <li className="todo-item" key={i}>
              {obj.value}
              <button
                type="button"
                onClick={function () {
                  const { id } = obj;

                  const newTodoList = todo.filter(function (currentTodo) {
                    const currentTodoId = currentTodo.id;

                    if (id !== currentTodoId) {
                      return true;
                    }
                    return false;
                  });

                  setTodo(newTodoList);
                }}
              >
                Х
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
