const mysql = require("mysql2");
const dotenv = require();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "tanulo",
  password: process.env.DB_PASSWORD || "tanulo",
  database: process.env.DB_DATABASE || "HiddenRiffsHu",
});

connection.connect((err) => {
  if (err) {
    console.error("Hiba a MySQL kapcsolódás során: ", err);
    return;
  }
  console.log("Sikeres MySQL kapcsolódás!");
});

module.exports = connection;
