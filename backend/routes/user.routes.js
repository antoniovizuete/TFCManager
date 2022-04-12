
const {Router} = require('express');
const {check} = require('express-validator');

const {validateFields} = require('../middlewares/validateFields');

const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user.controllers');
const { validRole, validEmail, validUserId } = require('../helpers/dbValidators');

const router = Router();

router.get('/', userGet);

router.post('/', [
    check('name', 'El nombre es obligatorio.').not().isEmpty(),
    check('email', 'El email no es válido.').isEmail(),
    check('email').custom(validEmail),
    check('password', 'El password debe tener más de 10 letras.').isLength({min:10}), 
    check('role').custom(validRole),
    validateFields
], userPost);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(validUserId),
    check('role').custom(validRole),
    validateFields
], userPut);

router.patch('/', userPatch);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(validUserId),
    validateFields
], userDelete);

module.exports = router;
