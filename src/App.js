import { useState, useRef } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid"

function App() {
  const [todos, setTods] = useState([
    { id: 1, name: "todo1", completed: true },
    { id: 2, name: "todo2", completed: false },
    { id: 3, name: "todo3", completed: false },
    { id: 4, name: "todo4", completed: false },
  ]);
  const listname = useRef();

  const listadd = () => {
    //リスト追加
    const name = listname.current.value;
    setTods((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    listname.current.value = null;
  };
  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTods(newTodos);
  };

  return (
    <div>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={listname} />
      <button onClick={listadd}>タスク追加</button>
      <button>完了したタスクの掃除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
