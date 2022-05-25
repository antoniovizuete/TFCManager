
const { dbQuery, dbQueryCount, dbQueryFindOne } = require('../database/config.db');

const materialGet = async(req, res) => {

    const {limit=100, from=0} = req.query;
    const sql = 'SELECT * from materials WHERE material_state=true LIMIT ? OFFSET ?';
    const countSql = 'SELECT COUNT (material_id) as count from materials WHERE material_state=true';

    const [ total, materials ] = await Promise.all([
        dbQueryCount(countSql),
        dbQuery(sql,[limit, from])
    ]);

    res.json({
       total,
       materials
    });
}

const materialByIdGet = async(req, res) => {

    const {id} = req.params;
    const sql = 'SELECT * from materials WHERE material_state=true AND material_id=?';
    const [ material ] = await Promise.all([
        dbQueryFindOne(sql, [id])
    ]);

    res.json({
       material
    });
}

const materialPost = async(req, res) => {

    const { material_reference, material_brand, material_description, material_pvp, material_ecotax } = req.body;

    const sql = 'INSERT INTO materials ( material_reference, material_brand, material_description, material_pvp, material_ecotax) VALUES (?, ?, ?, ?, ?)';
    dbQuery(sql, [ material_reference, material_brand, material_description, material_pvp, material_ecotax]);

    res.json({
        mssg: 'post API'
    })
}

const materialPut = async(req, res) => {

    const { id } = req.params;
    const {material_reference, material_brand, material_description, material_pvp, material_ecotax } = req.body;

    const sql = 'UPDATE materials SET material_reference = ?, material_brand = ?, material_description = ?, material_pvp = ?, material_ecotax = ? WHERE material_id=?';
    const response = await dbQuery(sql,[material_reference, material_brand, material_description, material_pvp, material_ecotax, id]);

    res.json({
        response
    })
}

const materialPatch = async(req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const materialDelete = async(req, res) => {
    const { id } = req.params;
    
    const sql = 'UPDATE materials SET material_state=false WHERE material_id=?';
    dbQuery(sql,[id]);

    res.json({
        mssg: 'Delete material'
    })
}

module.exports = {
    materialGet, materialPut,
    materialPost, materialDelete,
    materialPatch, materialByIdGet
}
