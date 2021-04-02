const data = require("../storage/data.js");

module.exports = function (request, response) {
  response.send(data);
};
