
const bcryptjs = require('bcryptjs');
const { dbQuery, dbQueryCount } = require('../database/config.db');

const userGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * FROM users INNER JOIN roles ON users.user_role = roles.role_id WHERE user_state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (user_id) as count from users WHERE user_state=true';

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

    const { user_name, user_email, user_password, user_role } = req.body;

    //encriptar password
    const salt = bcryptjs.genSaltSync();
    const hashedPassword = bcryptjs.hashSync(user_password, salt);

    //guardar en BD
    const sql = 'INSERT INTO users (user_name, user_email, user_password, user_role) VALUES (?, ?, ?, ?)';
    dbQuery(sql, [user_name, user_email, hashedPassword, user_role]);

    res.json({
        mssg: 'post API'
    })
}

const userPut = async(req, res) => {

    const {id} = req.params;
    const {_id, password, google, user_email, ...other } =req.body;

    //Validar en base de datos.
    if(password){
        const salt = bcryptjs.genSaltSync();
        other.password = bcryptjs.hashSync(password, salt);
    };

    // const user = await User.findByIdAndUpdate(id, other);

    res.json(user);
}

const userPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const userDelete = async(req, res) => {

    const { id } = req.params;

    //const user = await User.findByIdAndUpdate(id, {state: false});

    // res.json({
    //     user
    // })
}

module.exports = {
    userGet, userPut,
    userPost, userDelete,
    userPatch
}
