const data = require("../../storage/data.js");

module.exports = function(request, response) {
  const id = request.params.todo_id;
  const index = data.findIndex(todo => todo.id == id);
  data.splice(index, 1);
  if (index) {
    return response.status(204).send(data);
  }
  return response.status(404).send(`Couldn't found todo with id=${id}`);
}
