// app.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Endpoint to add a new item
app.post('/items', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO items(name) VALUES($1) RETURNING *', [name]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get all items
app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
