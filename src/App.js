import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello guys" },
    { id: 2, title: "novahub " },
    { id: 3, title: "owt" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [... todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  console.log(todoList.length)
  return (
    <div>
      <div className="app">
        <TodoList todos={todoList} onTodoClick={handleTodoClick} />

      </div>
     </div>
  );
}

export default App;
