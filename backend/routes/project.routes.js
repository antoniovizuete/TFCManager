
const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT } = require('../middlewares');

const { projectGet, projectPut, projectGetById, projectDelete, projectPatch } = require('../controllers/project.controllers');
const { validRole, validUserEmail } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');
const { isAdminRole } = require('../middlewares/validateRoles');


const router = Router();

router.get('/', authorizationToken, projectGet);

router.post('/:id', authorizationToken, isAdminRole, projectGetById);

router.put('/:id', authorizationToken, isAdminRole, projectPut);

router.patch('/', authorizationToken, isAdminRole, projectPatch);

router.delete('/:id', authorizationToken, isAdminRole, projectDelete);

module.exports = router;
