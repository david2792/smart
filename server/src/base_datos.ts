import mysql from 'promise-mysql';
import key from './key';

const pool = mysql.createPool(key.database);
pool.getConnection()
    .then(connection=>{
        pool.releaseConnection(connection);
        console.log("se conecto a la base de datos");
    });

export default pool;