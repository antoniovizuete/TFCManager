
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const userGet = async(req, res) => {
    const {limit=100, from=0} = req.query;

    const {users} = await User.findAll({where: {state: true}, offset: from, limit});
   
    res.json({
        count: 5,
        users
    });
}

const userPost = async(req, res) => {

    const { name, email, password, role } = req.body;
    const user = new User({name, email, password, role});

    //encriptar password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    //guardar en BD
    // const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    // dbQuery(sql, []);
    await user.save();

    res.json({
        mssg: 'post API',
        user
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
