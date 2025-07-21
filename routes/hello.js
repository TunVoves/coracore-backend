const express = require('express');
const router = express.Router();

// GET /api/hello
router.get('/', (req, res) => {
  res.json({ message: 'Merhaba Coracore 🚀' });
});

module.exports = router;
