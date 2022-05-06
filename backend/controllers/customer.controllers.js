
const { dbQuery, dbQueryCount } = require('../database/config.db');

const customerGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from customers WHERE state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (id) as count from customers WHERE state=true';

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

    const { dni, name, email, address, city, province, cp, phone } = req.body;

    //guardar en BD
    const sql = 'INSERT INTO customers (dni, name, email, address, city, province, cp, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    dbQuery(sql, [dni, name, email, address, city, province, cp, phone]);

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
