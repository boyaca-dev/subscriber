const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {
  const mailerGroup = process.env.MAILER_LITE_GROUP || '';
  if (mailerGroup.length <= 0) {
    return res.send({ success: false, error: 'Invalid MailerLite group' });
  }

  const mailerKey = process.env.MAILER_LITE_API || '';
  if (mailerKey.length <= 0) {
    return res.send({ success: false, error: 'Invalid MailerLite api key' });
  }

  const { name, email } = req.body;
  const data = { name, email };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': mailerKey,
    }
  };
  return axios.post(`https://api.mailerlite.com/api/v2/groups/${mailerGroup}/subscribers`,
    data, config)
    .then(result => res.send({ success: true, data: result.data }))
    .catch(err => {
      return res.send({ success: false, error: err ? err.message || err.toString() : 'Error' });
    });
});

module.exports = router;
