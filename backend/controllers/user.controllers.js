
const bcryptjs = require('bcryptjs');
const { dbQuery, dbQueryCount, dbQueryFindOne } = require('../database/config.db');

const userGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * FROM users INNER JOIN roles ON users.user_role = roles.role_id WHERE user_state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (user_id) as count from users WHERE user_state=true';

    const [ total, users ] = 
    await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       users
    });
}

const userGetById = async(req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * from users INNER JOIN roles ON users.user_role = roles.role_id WHERE user_state=true AND user_id=?';
    const [ user ] = await Promise.all([
        dbQueryFindOne(sql,[id])
    ]);

    res.json({
        user
     });
}

const projectGetByUserId = async(req, res) => {

    const {id} = req.params;
    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from projects INNER JOIN customers ON projects.project_customer = customers.customer_id INNER JOIN users ON projects.project_author = users.user_id WHERE project_state=true AND project_author=? LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (project_id) as count from projects WHERE project_state=true';
    const [ total, projects ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[id, limit, from])
    ]);

    res.json({
        total,
        projects
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

    const { id } = req.params;
    const {user_name, user_email, user_address, user_city, user_province, user_cp, user_phone, user_role } = req.body;

    const sql = 'UPDATE users SET user_name = ?, user_email = ?, user_address = ?, user_city = ?, user_province = ?, user_cp = ?, user_phone = ?, user_role = ? WHERE user_id = ?';
    const response = await dbQuery(sql,[user_name, user_email, user_address, user_city, user_province, user_cp, user_phone, user_role, id]);

    res.json({
        response
    })
}

const userPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const userDelete = async(req, res) => {
    const { id } = req.params;
    
    const sql = 'UPDATE users SET user_state=false WHERE user_id=?';
    dbQuery(sql,[id]);

    res.json({
        mssg: 'Delete material'
    })
}

module.exports = {
    userGet, userPut,
    userPost, userDelete,
    userPatch, userGetById,
    projectGetByUserId
}
