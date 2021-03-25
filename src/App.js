import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello guys", done: false },
    { id: 2, title: "novahub ", done: false },
    { id: 3, title: "owt", done: false },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleCheckBoxClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  }

  console.log(todoList.length);

  function handleTodoFormSubmit(formValues) {
    console.log("Form submit:", formValues);

    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <div className="app">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title">Awesome Todo list</h4>
                    <TodoForm onSubmit={handleTodoFormSubmit} />
                    <div className="list-wrapper">
                      <TodoList
                        todos={todoList}
                        onTodoClick={handleTodoClick}
                        onCheckBoxClick={handleCheckBoxClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
