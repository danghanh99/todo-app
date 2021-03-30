var express = require('express');
var apiMocker = require('connect-api-mocker');
const port = 3001; 
var app = express();
const cors = require('cors');
app.use(cors());

app.use('/api', apiMocker('mock-api'));
 
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));