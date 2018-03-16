const express = require('express')
const app = express();
const port = 3001;

const { getScore } = require('./controllers');

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}!`)
// });

getScore().then(result => console.log(result));
