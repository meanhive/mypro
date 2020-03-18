const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3400, () => {
  console.log(`server is running in http://localhost:3400`);
});
