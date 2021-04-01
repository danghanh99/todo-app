const data = require("../../storage/data.js");

module.exports = function (request, response) {
  const new_todo = request.body;
  const id = request.params.todo_id;
  const index = data.findIndex((todo) => todo.id == id);
  data[index].done = new_todo.done;
  if (index !== -1) {
    return response.status(200).send(data[index]);
  }
  return response.status(404).send(`Couldn't found todo with id=${id}`);
};
