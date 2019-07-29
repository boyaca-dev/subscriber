const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  return res.send(true);
});

module.exports = router;
