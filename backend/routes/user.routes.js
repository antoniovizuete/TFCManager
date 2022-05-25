
const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT } = require('../middlewares');

const { userGet, userPut, userPost, userDelete, userPatch, userGetById, projectGetByUserId } = require('../controllers/user.controllers');
const { validRole, validUserEmail } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');
const { isAdminRole } = require('../middlewares/validateRoles');

const router = Router();

router.get('/', authorizationToken, userGet);

router.post('/', authorizationToken, isAdminRole, 
    [
        check('user_name', 'El nombre es obligatorio.').not().isEmpty(),
        check('user_email', 'El email no es válido.').isEmail(),
        check('user_email').custom(validUserEmail),
        check('user_password', 'El password debe tener más de 8 letras.').isLength({min:8}), 
        check('user_role').custom(validRole),
        validateFields
    ], 
    userPost);

router.post('/:id/projects', authorizationToken, projectGetByUserId)

router.post('/:id', authorizationToken, isAdminRole, userGetById)

router.put('/:id', authorizationToken, isAdminRole, userPut);

router.patch('/', authorizationToken, isAdminRole, userPatch);

router.delete('/:id', authorizationToken, isAdminRole, userDelete);

module.exports = router;
