const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log('The application is running on localhost:3002');
});