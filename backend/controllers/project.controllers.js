
const bcryptjs = require('bcryptjs');
const { dbQuery, dbQueryCount } = require('../database/config.db');

const projectGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * FROM projects INNER JOIN customers ON projects.project_customer = customers.customer_id INNER JOIN users ON projects.project_author = users.user_id WHERE projects.project_state=true LIMIT ? OFFSET ?';
    
    const countSql = 'SELECT COUNT (project_id) as count from projects WHERE project_state=true';

    const [ total, projects ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       projects
    });
}

const projectPost = async(req, res) => {

    const { project_name, project_author, project_customer, project_description  } = req.body;

    const sql = 'INSERT INTO projects (project_name, project_author, project_customer, project_description) VALUES (?, ?, ?, ?)';
    dbQuery(sql, [project_name, project_author, project_customer, project_description]);

    res.json({
        mssg: 'post API'
    })
}

const projectPut = async(req, res) => {

    const {id} = req.params;
    const {_id, password, google, email, ...other } =req.body;

    //Validar en base de datos.
    if(password){
        const salt = bcryptjs.genSaltSync();
        other.password = bcryptjs.hashSync(password, salt);
    };

    // const user = await User.findByIdAndUpdate(id, other);

    res.json(user);
}

const projectPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const projectDelete = async(req, res) => {

    const { id } = req.params;

    //const user = await User.findByIdAndUpdate(id, {state: false});

    // res.json({
    //     user
    // })
}

module.exports = {
    projectGet, projectPut,
    projectPost, projectDelete,
    projectPatch
}
