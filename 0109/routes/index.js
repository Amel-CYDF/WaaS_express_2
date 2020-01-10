const express = require('express');
const router = express.Router();
const postRouter = require('./post');

router.get('/', function(req, res, next) {
  res.status(200).send('hello');
});

router.use('/posts', postRouter);
router.use('/err', (req, res, next) => {
  next('error occurs!');
});

const amel = (char, time) => {
  return new Promise( resolve => {
    setTimeout( () => {
      console.log(char);
      resolve();
    }, time);
  });
};

const test = async () => {
  await amel('a', 5000);
  await amel('b', 3000);
  await amel('c', 1000);
  throw new Error('error');
};

router.get('/async', async function(req, res, next) {
  try {
    await test();
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({msg: 'error occur!'});
});

module.exports = router;