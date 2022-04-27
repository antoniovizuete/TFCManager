
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host:  process.env.HOST,
    dialect: 'mariadb'
});

const dbConnect = async() =>{

    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
    
    return sequelize;

};

const getDbConnection = () => {
    return sequelize;
}

module.exports = {
    dbConnect,
    getDbConnection
};
