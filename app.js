const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.user(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: 'Who is buried in Grant\'s tomb?',
    hint: 'Think about whose tomb it is',
  });
});

app.get('/hello', (req, res) => {
  res.render('hello', { name: req.cookies.username });
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.render('hello', { name: req.body.username });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log('The application is running on localhost:3002');
});
