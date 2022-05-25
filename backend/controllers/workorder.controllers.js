
const { dbQuery, dbQueryCount, dbQueryFindOne } = require('../database/config.db');

const workorderGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * FROM workorders INNER JOIN users ON workorders.workorder_author = users.user_id INNER JOIN projects ON workorders.workorder_project = projects.project_id WHERE workorders.workorder_state=true LIMIT ? OFFSET ?';
    
    const countSql = 'SELECT COUNT (workorder_id) as count from workorders WHERE workorder_state=true';

    const [ total, workorders ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       workorders
    });
}

// SELECT u.user_name, COALESCE(AUX.orders,0) FROM users u LEFT JOIN (SELECT workorder_author, COUNT(*) AS orders FROM workorders GROUP BY workorder_author) AUX ON AUX.workorder_author=u.user_id;

const workorderGetById = async(req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * from workorders INNER JOIN projects ON workorders.workorder_project = projects.project_id INNER JOIN users ON workorders.workorder_author = users.user_id WHERE workorder_state=true AND workorder_id=?';
    const [ workorder ] = await Promise.all([
        dbQueryFindOne(sql,[id])
    ]);

    res.json({
        workorder
     });
}

const workorderPost = async(req, res) => {

    const { workorder_author, workorder_project, workorder_hours, workorder_minutes  } = req.body;

    const sql = 'INSERT INTO workorders (workorder_author, workorder_project, workorder_hours, workorder_minutes) VALUES (?, ?, ?, ?)';
    dbQuery(sql, [workorder_author, workorder_project, workorder_hours, workorder_minutes]);

    res.json({
        mssg: 'post API'
    })
}

const workorderPut = async(req, res) => {
    const { id } = req.params;
    const { workorder_hours, workorder_minutes } = req.body;

    const sql = 'UPDATE workorders SET  workorder_hours = ?, workorder_minutes = ? WHERE workorder_id = ?';
    const response = await dbQuery(sql,[workorder_hours, workorder_minutes, id]);

    res.json({
        response
    })

}

const workorderPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const workorderDelete = async(req, res) => {

    const { id } = req.params;

    const sql = 'UPDATE workorders SET workorder_state=false WHERE workorder_id=?';
    dbQuery(sql,[id]);

    res.json({
        mssg: 'Delete Workorder'
    })
}

module.exports = {
    workorderGet, workorderPut,
    workorderPost, workorderDelete,
    workorderPatch, workorderGetById
}
