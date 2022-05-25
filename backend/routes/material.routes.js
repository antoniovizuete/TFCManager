
const {Router} = require('express');
const { isAdminRole } = require('../middlewares/validateRoles');
//const {check} = require('express-validator');

//middlewares
//const { validateFields, validateJWT } = require('../middlewares');

const { materialGet, materialByIdGet, materialPut, materialPost, materialDelete, materialPatch } = require('../controllers/material.controllers');
const { } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');

const router = Router();

router.get('/', authorizationToken, materialGet);

router.post('/:id', authorizationToken, materialByIdGet);

router.post('/', authorizationToken, isAdminRole, materialPost);

router.put('/:id', authorizationToken, isAdminRole, materialPut);

router.patch('/', authorizationToken, isAdminRole, materialPatch);

router.delete('/:id', authorizationToken, isAdminRole, materialDelete);

module.exports = router;
