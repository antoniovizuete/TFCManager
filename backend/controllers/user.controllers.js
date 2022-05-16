
const bcryptjs = require('bcryptjs');
const User = require('../models/Users');

const userGet = async(req, res) => {

    const {limit=100, from=0} = req.query;

    const users = await User.find({where:{state:true}, offset: from, limit});
    
    res.json({
        count: 10,
        users
    });
}

const userPost = async(req, res) => {

    const { user_name, user_email, user_password, user_role } = req.body;

    //encriptar password
    const salt = bcryptjs.genSaltSync();
    const hashedPassword = bcryptjs.hashSync(user_password, salt);

    //guardar en BD
    const newUser = new User({
        user_name : user_name, 
        user_email: user_email, 
        user_password: hashedPassword, 
        user_role: user_role,
        user_state: 1
    });

    console.log(newUser);

    await newUser.save();

}

const userPut = async(req, res) => {

    const {id} = req.params;
    const {_id, password, google, user_email, ...other } =req.body;

    //Validar en base de datos.
    if(password){
        const salt = bcryptjs.genSaltSync();
        other.password = bcryptjs.hashSync(password, salt);
    };

    // const user = await User.findByIdAndUpdate(id, other);

    res.json(user);
}

const userPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const userDelete = async(req, res) => {

    const { id } = req.params;

    //const user = await User.findByIdAndUpdate(id, {state: false});

    // res.json({
    //     user
    // })
}

module.exports = {
    userGet, userPut,
    userPost, userDelete,
    userPatch
}
