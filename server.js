const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./config/connection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Connected to the employee_db database.'));
});

// Create a employee
app.post('/api/departments', ({ body }, res) => {
  const sql = `INSERT INTO departments (dep_name)
    VALUES (?)`;
  const params = [body.dep_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});



app.use((req, res) => {
  res.status(404).end();
});

