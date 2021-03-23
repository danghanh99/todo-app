import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <div className="add-items d-flex">
                    {" "}
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                    />{" "}
                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                      Add
                    </button>{" "}
                  </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      <li>
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input className="checkbox" type="checkbox" /> For
                            what reason would it be advisable.{" "}
                            <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input
                              className="checkbox"
                              type="checkbox"
                              defaultChecked
                            />{" "}
                            For what reason would it be advisable for me to
                            think. <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li>
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input className="checkbox" type="checkbox" /> it be
                            advisable for me to think about business content?{" "}
                            <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li>
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input className="checkbox" type="checkbox" /> Print
                            Statements all <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input
                              className="checkbox"
                              type="checkbox"
                              defaultChecked
                            />{" "}
                            Call Rampbo <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                      <li>
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input className="checkbox" type="checkbox" /> Print
                            bills <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i className="remove mdi mdi-close-circle-outline" />
                      </li>
                    </ul>
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
