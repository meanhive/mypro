const express = require('express');
const app = express();
const PORT = Number(process.env.PORT || 3400);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});
app.listen(PORT, () => {
  console.log(`server is running in http://localhost:3400`);
});
