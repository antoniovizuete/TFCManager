
const { dbQuery, dbQueryCount } = require('../database/config.db');

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

const workorderPost = async(req, res) => {

    const { workorder_author, workorder_project, workorder_hours, workorder_minutes  } = req.body;

    const sql = 'INSERT INTO workorders (workorder_author, workorder_project, workorder_hours, workorder_minutes) VALUES (?, ?, ?, ?)';
    dbQuery(sql, [workorder_author, workorder_project, workorder_hours, workorder_minutes]);

    res.json({
        mssg: 'post API'
    })
}

const workorderPut = async(req, res) => {

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

const workorderPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const workorderDelete = async(req, res) => {

    const { id } = req.params;

    //const user = await User.findByIdAndUpdate(id, {state: false});

    // res.json({
    //     user
    // })
}

module.exports = {
    workorderGet, workorderPut,
    workorderPost, workorderDelete,
    workorderPatch
}
