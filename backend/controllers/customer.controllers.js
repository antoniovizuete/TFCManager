
const { dbQuery, dbQueryCount } = require('../database/config.db');

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

    const {id} = req.params;
    const {_id, password, email, ...other } =req.body;

    const customer = await User.findByIdAndUpdate(id, other);

    res.json(customer);
}

const customerPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const customerDelete = async(req, res) => {

    const { id } = req.params;

    const customer = await Customer.findByIdAndUpdate(id, {state: false});

    res.json({
        customer
    })
}

module.exports = {
    customerGet, customerPut,
    customerPost, customerDelete,
    customerPatch
}
