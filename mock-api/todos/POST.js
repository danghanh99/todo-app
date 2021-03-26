const data = require("../storage/data.js");

module.exports = function (request, response) {
  const new_todo = request.body;
  data.push({
    id: Math.max(...data.map(todo => todo.id)) + 1,
    title: new_todo.title,
    done: new_todo.done
  });
  response.status(201).send(data);
}
