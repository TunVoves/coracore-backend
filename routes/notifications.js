const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Örnek sabit bildirim verisi
  const notifications = [
    { id: 1, message: 'Yeni kullanıcı eklendi.' },
    { id: 2, message: 'Satış raporu oluşturuldu.' },
    { id: 3, message: 'Profil güncellendi.' },
  ];
  res.json(notifications);
});

module.exports = router;
