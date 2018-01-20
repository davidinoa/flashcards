const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log('The application is running on localhost:3002');
});