const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/tasks');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((error) => console.log('MongoDB connection failed:', error.message));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});