
const mongoose = require('mongoose');


// const dbConnection = mongoose.connect(process.env.CONNECTIONSTRING);

// const dbConnect = () =>{
//     return new Promise((resolve, reject) => {
//         dbConnection.connect((err) => {
//             if(err){
//                 console.error('Error de conexion: ' + err.stack);
//                 reject(err);
//                 return;
//             }
//             console.log('Conectado con el identificador '+dbConnection.threadId);
//             resolve();
//         });
//     });
// };

const dbConnect = async() =>{
    try{
        const dbConnection = mongoose.connect(process.env.CONNECTIONSTRING);
        console.log('Connection has been established successfully.');
        return dbConnection;
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
   
};


// const mysql = require('mysql');
// const dbConnection = mysql.createConnection({
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
// });

// const dbConnect = () =>{
//     return new Promise((resolve, reject) => {
//         dbConnection.connect((err) => {
//             if(err){
//                 console.error('Error de conexion: ' + err.stack);
//                 reject(err);
//                 return;
//             }
//             console.log('Conectado con el identificador '+dbConnection.threadId);
//             resolve();
//         });
//     });
// };

// const dbQuery = (sql, parameters) =>{
//     return new Promise((resolve, reject) => {
//         dbConnection.query(sql, parameters, (err, results)=>{
//             if(err){
//                 reject(err);
//             }
//             resolve(results);
//         });
//     });
// };

// const dbQueryExists = async(sql, parameters) => {
   
//     const results = await dbQuery(sql, parameters);
//     return results && results.length>0;
   
// }

// const dbQueryCount = (countSql, parameters) =>{
//     return new Promise((resolve, reject) => {
//         dbConnection.query(countSql, parameters, (err, results)=>{
//             if(err){
//                 reject(err);
//             }else if(results && results.length>0){
//                 resolve(results[0].count);
//             }else{
//                reject('No se ha pasado una sentencia count.'); 
//             }
//         });
//     });
// };

// module.exports = {
//     dbQuery,
//     dbQueryCount,
//     dbConnect,
//     dbQueryExists
// };

module.exports = dbConnect;
