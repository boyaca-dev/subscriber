const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send({ status: 'ok', success: true });
});

module.exports = router;
