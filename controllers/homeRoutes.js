const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/index/login', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/index', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('index');
});


router.get('/login', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.get('/register', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('register');
});

router.get('/userinput', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('userdata');
});

router.get('/userresult', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('userResult');
});


module.exports = router;
