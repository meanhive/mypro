const express = require('express');
const app = express();
const PORT = Number(process.env.PORT || 3400);

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`server is running in http://localhost:3400`);
});
