
const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT } = require('../middlewares');

const { workorderGet, workorderPut, workorderGetById, workorderPost, workorderDelete, workorderPatch } = require('../controllers/workorder.controllers');
const { validRole, validUserEmail } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');
const { isAdminRole } = require('../middlewares/validateRoles');


const router = Router();

router.get('/', authorizationToken, workorderGet);

router.post('/', authorizationToken, isAdminRole, workorderPost);

router.post('/:id', authorizationToken, isAdminRole, workorderGetById);

router.put('/:id', authorizationToken, isAdminRole, workorderPut);

router.patch('/', authorizationToken, isAdminRole, workorderPatch);

router.delete('/:id', authorizationToken, isAdminRole, workorderDelete);

module.exports = router;
