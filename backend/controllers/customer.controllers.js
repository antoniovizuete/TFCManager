
const { dbQuery, dbQueryCount, dbQueryFindOne } = require('../database/config.db');

const customerGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from customers WHERE customer_state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (customer_id) as count from customers WHERE customer_state=true';

    const [ total, customers ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       customers
    });
}

const customerByIdGet = async(req, res) => {

    const {id} = req.params;
    const sql = 'SELECT * from customers WHERE customer_state=true AND customer_id=?';
    const [ customer ] = await Promise.all([
        dbQueryFindOne(sql, [id])
    ]);

    res.json({
       customer
    });
}

const projectGetByCustomerId = async(req, res) => {

    const {id} = req.params;
    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from projects INNER JOIN customers ON projects.project_customer = customers.customer_id INNER JOIN users ON projects.project_author = users.user_id WHERE project_state=true AND project_customer=? LIMIT ? OFFSET ?';
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

const customerPost = async(req, res) => {

    const { customer_dni, customer_name, customer_email, customer_address, customer_city, customer_province, customer_cp, customer_phone } = req.body;

    //guardar en BD
    const sql = 'INSERT INTO customers (customer_dni, customer_name, customer_email, customer_address, customer_city, customer_province, customer_cp, customer_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    dbQuery(sql, [customer_dni, customer_name, customer_email, customer_address, customer_city, customer_province, customer_cp, customer_phone]);

    res.json({
        mssg: 'post API'
    })
}

const customerPut = async(req, res) => {

    const { id } = req.params;
    const {customer_name, customer_email, customer_address, customer_city, customer_province, customer_cp, customer_phone } = req.body;

    const sql = 'UPDATE customers SET customer_name = ?, customer_email = ?, customer_address = ?, customer_city = ?, customer_province = ?, customer_cp = ?, customer_phone = ? WHERE customer_id=?';
    const response = await dbQuery(sql,[customer_name, customer_email, customer_address, customer_city, customer_province, customer_cp, customer_phone, id]);

    res.json({
        response
    })
}

const customerDelete = async(req, res) => {

    const { id } = req.params;
    
    const sql = 'UPDATE customers SET customer_state=false WHERE customer_id=?';
    const response = await dbQuery(sql,[id]);

    res.json({
        response
    })
}

const customerPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

module.exports = {
    customerGet, customerByIdGet,
    customerPut, customerPost, 
    customerDelete, customerPatch,
    projectGetByCustomerId
}
