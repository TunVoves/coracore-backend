const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );
    res.status(201).json({ message: 'Kayıt başarılı', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Kayıt başarısız', detail: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    const user = result.rows[0];
    if (!user) return res.status(400).json({ error: 'Kullanıcı bulunamadı' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Şifre hatalı' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ message: 'Giriş başarılı', token });
  } catch (error) {
    res.status(500).json({ error: 'Giriş başarısız', detail: error.message });
  }
};

module.exports = { register, login };

