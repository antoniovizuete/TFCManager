
const mysql = require('mysql');
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

const dbConnect = () =>{
    return new Promise((resolve, reject) => {
        dbConnection.connect((err) => {
            if(err){
                console.error('Error de conexion: ' + err.stack);
                reject(err);
                return;
            }
            console.log('Conectado con el identificador '+dbConnection.threadId);
            resolve();
        });
    });
};

const dbQuery = (sql, parameters) =>{
    return new Promise((resolve, reject) => {
        dbConnection.query(sql, parameters, (err, results)=>{
            if(err){
                reject(err);
            }
            resolve(results);
        });
    });
};

const dbQueryFindOne = (sql, parameters) =>{
    return new Promise((resolve, reject) => {
        dbConnection.query(sql, parameters, (err, results)=>{
            if(err){
                reject(err);
            }else if(results && results.length>0){
                resolve(results[0]);
            }else{
               reject('No existe el ID.'); 
            }
        });
    });
};

const dbQueryExists = async(sql, parameters) => {
   
    const results = await dbQuery(sql, parameters);
    return results && results.length>0;
   
}

const dbQueryCount = (countSql, parameters) =>{
    return new Promise((resolve, reject) => {
        dbConnection.query(countSql, parameters, (err, results)=>{
            if(err){
                reject(err);
            }else if(results && results.length>0){
                resolve(results[0].count);
            }else{
               reject('No se ha pasado una sentencia count.'); 
            }
        });
    });
};

module.exports = {
    dbQuery,
    dbQueryCount,
    dbConnect,
    dbQueryExists,
    dbQueryFindOne
};
