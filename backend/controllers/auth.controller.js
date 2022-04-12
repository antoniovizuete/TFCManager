
const { response } = require('express');

const login = (req, res = response) => {

    res.json({
        mssg: 'Login Ok.'
    });

}

module.exports = {
    login
}
