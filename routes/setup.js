const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Setup API çalışıyor 🚀');
});

module.exports = router;
