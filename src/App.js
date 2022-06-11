import { useState, useRef } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid"

function App() {
  const [todos, setTods] = useState([
    { id: 1, name: "todo1", completed: true },
    { id: 2, name: "todo2", completed: false },
  ]);

  const listname = useRef();

  //リスト追加
  const listadd = () => {
    const name = listname.current.value;
    setTods((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    listname.current.value = null;
  };

  //リスト完了
  const toggleTodo = (id) => {
    const newTodos = [...todos]
    console.log("aaa",newTodos)
    const todo = newTodos.find((todo) => todo.id === id);
    console.log("bbb",todo)
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
