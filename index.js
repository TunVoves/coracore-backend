const helloRoute = require('./routes/hello');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const setupRoutes = require('./routes/setup');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/setup', setupRoutes);
app.use('/api/hello', helloRoute);


app.get('/', (req, res) => {
  res.send('Coracore Backend API çalışıyor 🚀');
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
