
const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user.controllers');
const { validRole, validUserEmail } = require('../helpers/dbValidators');


const router = Router();

router.get('/', userGet);

router.post('/', [
    check('user_name', 'El nombre es obligatorio.').not().isEmpty(),
    check('user_email', 'El email no es válido.').isEmail(),
    check('user_email').custom(validUserEmail),
    check('user_password', 'El password debe tener más de 8 letras.').isLength({min:8}), 
    check('user_role').custom(validRole),
    validateFields
], userPost);

router.put('/:id', [
    // check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(validUserId),
    // //check('role').custom(validRole),
    // validateFields
], userPut);

router.patch('/', userPatch);

router.delete('/:id', [
    // validateJWT,
    // //isAdminRole,
    // hasRole('Administrador', 'Empleado'),
    // //check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(validUserId),
    // validateFields
], userDelete);

module.exports = router;
