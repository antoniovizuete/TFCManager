
const {Router} = require('express');
const {check} = require('express-validator');
const { loginController } = require('../controllers/auth.controller');

const {validateFields} = require('../middlewares/validateFields');

const router = Router();

router.post('/login', [
    check('email', 'El email es un campo obligatorio.').isEmail(),
    check('password', 'El password es un campo obligatorio.').not().isEmpty(),
    validateFields
], loginController);

module.exports = router;
