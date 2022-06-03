
const mysql = require('mysql');

// const { Client } = require('pg');

// const connectionData = {
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     port: process.env.PORT,
// }

const dbConnection = mysql.createConnection({
    // host: process.env.HOST,
    // database: process.env.DATABASE,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // port: process.env.DBPORT

    host: 'containers-us-west-61.railway.app',
    database: 'railway',
    user: 'root',
    password: 'r3AJyDkdBVGtA6Z0N5fm',
    port: '7943'
});

// const client = new Client(connectionData);

// const dbConnect = () =>{
//     return new Promise((resolve, reject) => {
//         client.connect((err) => {
//             if(err){
//                 console.error('Error de conexion: ' + err.stack);
//                 reject(err);
//                 return;
//             }
//             console.log('Conectado a la base de datos');
//             resolve();
//         });
//     });
// };


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

// const dbQuery = (sql, parameters) =>{
//     return new Promise((resolve, reject) => {
//         client.query(sql, parameters, (err, results)=>{
//             if(err){
//                 reject(err);
//                 client.end();
//             }
//             resolve(results);
//             client.end();
//         });
//     });
// };

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

// const dbQueryFindOne = (sql, parameters) =>{
//     return new Promise((resolve, reject) => {
//         client.query(sql, parameters, (err, results)=>{
//             if(err){
//                 reject(err);
//                 client.end();
//             }else if(results && results.length>0){
//                 resolve(results[0]);
//                 client.end();
//             }else{
//                reject('No existe el ID.'); 
//                client.end();
//             }
//         });
//     });
// };

// const dbQueryFindOne = (sql, parameters) =>{
//     return new Promise((resolve, reject) => {
//         dbConnection.query(sql, parameters, (err, results)=>{
//             if(err){
//                 reject(err);
//             }else if(results && results.length>0){
//                 resolve(results[0]);
//             }else{
//                reject('No existe el ID.'); 
//             }
//         });
//     });
// };

const dbQueryExists = async(sql, parameters) => {
   
    const results = await dbQuery(sql, parameters);
    return results && results.length>0;
   
};

// const dbQueryCount = (countSql, parameters) =>{
//     return new Promise((resolve, reject) => {
//         client.query(countSql, parameters, (err, results)=>{
//             if(err){
//                 reject(err);
//                 client.end();
//             }else if(results && results.length>0){
//                 resolve(results[0].count);
//                 client.end();
//             }else{
//                reject('No se ha pasado una sentencia count.'); 
//                client.end();
//             }
//         });
//     });
// };

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
