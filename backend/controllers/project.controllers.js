
const bcryptjs = require('bcryptjs');
const { dbQuery, dbQueryCount, dbQueryFindOne } = require('../database/config.db');

const projectGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * FROM projects INNER JOIN customers ON projects.project_customer = customers.customer_id INNER JOIN users ON projects.project_author = users.user_id WHERE projects.project_state=true LIMIT ? OFFSET ?';
    
    const countSql = 'SELECT COUNT (project_id) as count from projects WHERE project_state=true';

    const [ total, users ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       users
    });
}

// SELECT distinct u.user_name FROM workorders wo INNER JOIN projects p ON p.project_id=wo.workorder_project INNER JOIN users u ON u.user_id=wo.workorder_author WHERE p.project_id=1;

const projectGetById = async(req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * from projects INNER JOIN customers ON projects.project_customer = customers.customer_id INNER JOIN users ON projects.project_author = users.user_id WHERE project_state=true AND project_id=?';
    const [ project ] = await Promise.all([
        dbQueryFindOne(sql,[id])
    ]);

    res.json({
        project
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

    const { id } = req.params;
    const { project_name, project_customer, project_description } = req.body;

    const sql = 'UPDATE projects SET project_name = ?, project_customer = ?, project_description = ? WHERE project_id = ?';
    const response = await dbQuery(sql,[project_name, project_customer, project_description, id]);

    res.json({
        response
    })
}

const projectPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const projectDelete = async(req, res) => {

    const { id } = req.params;
    
    const sql = 'UPDATE projects SET project_state=false WHERE project_id=?';
    dbQuery(sql,[id]);

    res.json({
        mssg: 'Delete Project'
    })
}

module.exports = {
    projectGet, projectPut,
    projectPost, projectDelete,
    projectPatch, projectGetById
}
