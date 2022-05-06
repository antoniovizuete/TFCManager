
const { dbQuery, dbQueryCount } = require('../database/config.db');

const materialGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from materials WHERE state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (id) as count from users WHERE state=true';

    const [ total, materials ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       materials
    });
}

const materialPost = async(req, res) => {

    const { reference, brand, description, pvp, ecotax } = req.body;

    const sql = 'INSERT INTO materials ( reference, brand, description, pvp, ecotax) VALUES (?, ?, ?, ?, ?)';
    dbQuery(sql, [ reference, brand, description, pvp, ecotax]);

    res.json({
        mssg: 'post API'
    })
}

const materialPut = async(req, res) => {

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

const materialPatch = async(req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const materialDelete = async(req, res) => {

    //const { id } = req.params;

    //const user = await User.findByIdAndUpdate(id, {state: false});

    // res.json({
    //     user
    // })
}

module.exports = {
    materialGet, materialPut,
    materialPost, materialDelete,
    materialPatch
}
