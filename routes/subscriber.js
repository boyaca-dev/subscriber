const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
});

module.exports = router;
