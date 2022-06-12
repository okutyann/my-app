import { useState, useRef } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid"

function App() {
  const [todos, setTods] = useState([]);
  const listname = useRef();

  //リスト追加
  const listadd = () => {
    const name = listname.current.value;
    if (name === "") return;
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

  const handlclear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTods(newTodos);
  };

  return (
    <div>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={listname} />
      <button onClick={listadd}>タスク追加</button>
      <button onClick={handlclear}>完了したタスクの掃除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed)}</div>
    </div>
  );
}

export default App;
