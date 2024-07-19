const express = require("express");
const mariadb = require("mariadb");
const app = express();
const port = 3307;
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydatabase",
  connectionLimit: 5, // จ านวนการเชื่อมต่อสูงสุด
});
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Route to create database
app.get("/createdb", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query("CREATE DATABASE IF NOT EXISTS mydatabase");
    res.send("Database created successfully");
  } catch (err) {
    res.status(500).send("Error creating database: " + err);
  } finally {
    if (conn) conn.release();
  }
});
// Route to create table
app.get("/createtable", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(`
    CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INTEGER(255) NOT NULL
    )
    `);

    res.send("Table created successfully");
  } catch (err) {
    res.status(500).send("Error creating table: " + err);
  } finally {
    if (conn) conn.release();
  }
});

app.get("/add _user", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    // const { name, age } = req.body;
    await conn.query("INSERT INTO user (name,age) VALUES (?, ?)", [name, age]);
    res.send("Data inserted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  } finally {
    if (conn) conn.end();
  }
});
