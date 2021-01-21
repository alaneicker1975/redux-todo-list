const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 10,
  socketPath: process.env.SOCKET_PATH,
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

pool.config.connectionLimit = 400;

class DB {
  constructor() {
    this.connection = null;
  }

  query = ({ query, data, isArray }) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        this.connection = connection;

        if (err) {
          console.log('DATABASE ERROR: ', err);
          connection.release();
          reject(err);
        }

        connection.query(query, data, (err, result) => {
          connection.release();
          if (err) {
            reject(err);
          } else {
            resolve(isArray === false ? result[0] : result);
          }
        });
      });
    });
}

// const db = ({ query, data, isArray }) =>
//   new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         console.log('DATABASE ERROR: ', err);
//         connection.release();
//         reject(err);
//       }
//       connection.query(query, data, (err, result) => {
//         connection.release();
//         if (err) {
//           reject(err);
//         } else {
//           resolve(isArray === false ? result[0] : result);
//         }
//       });
//     });
//   });

module.exports = DB;
