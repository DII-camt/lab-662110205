const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "test",
  connectionLimit: 5, // จ านวนการเชื่อมต่อสูงสุด
});
const root = {
  getUsers: async () => {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM user");
      return rows;
    } catch (err) {
      console.error(err);

      return [];
    } finally {
      if (conn) conn.end();
    }
  },
};
module.exports = root;
