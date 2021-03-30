import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const API_URL = "http://localhost:3001/api/";
function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getTodoList() {
      getAllTodos();
    }

    getTodoList();
  }, []);
  function getAllTodos() {
    axios({
      method: "GET",
      url: API_URL + "todos",
      data: null,
    })
      .then((res) => {
        console.log(res);
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleIconDeleteClick(todo: any) {
    const params_id = todo.id;
    axios
    .delete(API_URL + "todos/" + params_id)
    .then(function (response) {
      getAllTodos();
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  function handleCheckBoxClick(todo: any) {
    axios
    .patch(API_URL + "todos/" + todo.id, {
      title: todo.title,
      done: !todo.done,
    })
    .then(function (response) {
      console.log(response);
      getAllTodos();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function handleTodoFormSubmit(formValues: any) {
    console.log("Form submit:", formValues);
    axios
      .post(API_URL + "todos", {
        title: formValues.title,
        done: false,
      })
      .then(function (response) {
        console.log(response);
        getAllTodos();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="app">
        <div className="page-content page-container" id="page-content">
        <div className="padding" style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}} >
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title" style={{textAlign: 'left'}}>Awesome Todo list</h4>
                    <TodoForm onSubmit={handleTodoFormSubmit} />
                    <div className="list-wrapper">
                      <TodoList
                        todos={todoList}
                        onTodoClick={handleIconDeleteClick}
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
