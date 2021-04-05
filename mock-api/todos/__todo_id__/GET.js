const data = require("../../storage/data.js");

module.exports = function (request, response) {
  const id = request.params.todo_id;
  const found_todo = data.find((todo) => todo.id == id);
  if (found_todo) {
    return response.status(200).send(found_todo);
  }
  return response.status(404).send(`Couldn't found todo with id=${id}`);
};
