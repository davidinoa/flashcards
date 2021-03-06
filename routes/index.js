const express = require('express');

const router = express.Router();

// GET /register
router.get('/register', (req, res, next) => {
  return res.render('register', { title: 'Sign Up' });
});

// POST /register
router.post('/register', (req, res, next) => {
  return res.send('User created!');
});

router.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;
