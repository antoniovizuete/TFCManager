
const express = require('express');
const cors = require('cors');

const {dbConnect } = require('../database/config.db');

class Server {

    constructor(){
        this.app = express();
        this. port = process.env.PORT;
        this.usersPath = '/api/users';
        this. authPath = '/api/auth';

        //Conectar a BD
        this.conectDB();

        //Middlewares
        this.middlewares();


        //rutas dde mi app
        this.routes();
    }

    async conectDB(){
        await dbConnect();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y Parseo del body
        this.app.use(express.json());

        //directorio público
        this.app.use(express.static('public')); 
    }

    routes(){
       
        this.app.use(this.authPath, require('../routes/auth.routes'));
        this.app.use(this.usersPath, require('../routes/user.routes'));

    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;
