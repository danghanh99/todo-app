import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./components/TodoForm/todoSlice";
const API_URL = "http://localhost:3001/api/";
function App() {
  const todoList = useSelector((state: any) => state.todos)
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL + "todos",
    })
      .then((res) => {
        dispatch(getTodos(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="app">
        <div className="page-content page-container" id="page-content">
          <div
            className="padding"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "left" }}>
                      Awesome Todo list
                    </h4>
                    <TodoForm />
                    <div className="list-wrapper">
                      <TodoList
                        todos={todoList}
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
