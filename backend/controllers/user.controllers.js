
const bcryptjs = require('bcryptjs');
const { dbQuery, dbQueryCount } = require('../database/config.db');

const User = require('../models/user');

const userGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from users WHERE state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (id) as count from users WHERE state=true';

    const [ total, users ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       users
    });
}

const userPost = async(req, res) => {

    const { name, email, password, role } = req.body;

    console.log(name);
    //encriptar password
    const salt = bcryptjs.genSaltSync();
    const hashedPassword = bcryptjs.hashSync(password, salt);

    //guardar en BD
    const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    dbQuery(sql, [name, email, hashedPassword, role]);

    res.json({
        mssg: 'post API'
    })
}

const userPut = async(req, res) => {

    const {id} = req.params;
    const {_id, password, google, email, ...other } =req.body;

    //Validar en base de datos.
    if(password){
        const salt = bcryptjs.genSaltSync();
        other.password = bcryptjs.hashSync(password, salt);
    };

    const user = await User.findByIdAndUpdate(id, other);

    res.json(user);
}

const userPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const userDelete = async(req, res) => {

    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, {state: false});

    res.json({
        user
    })
}

module.exports = {
    userGet, userPut,
    userPost, userDelete,
    userPatch
}
