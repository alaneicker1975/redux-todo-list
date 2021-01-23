const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

class DB {
  constructor() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: process.env.HOST,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      ...(process.env.NODE_ENV !== 'PRODUCTION' && {
        socketPath: process.env.SOCKET_PATH,
      }),
    });

    this.pool.config.connectionLimit = 400;
    this.connection = null;
  }

  query = ({ query, data, isArray }) =>
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        this.connection = connection;

        if (err) {
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

module.exports = DB;
