import mysql from "mysql2/promise";

const conection = await mysql.createConnection({
  host: "localhost",
  user: "edixon_adso2894667",
  password: "Aprendiz2024",
  database: "node_adso2894667"
});

export default conection;