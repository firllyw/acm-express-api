const router = require('express').Router();
const { signIn,signUp} = require('./controller/login');

router.get('/hello', (req, res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

router.post('/sign-in',signIn);
router.post('/sign-up',signUp);

module.exports = router;