
const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const { workorderGet, workorderPut, workorderPost, workorderDelete, workorderPatch } = require('../controllers/workorder.controllers');
const { validRole, validUserEmail } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');


const router = Router();

router.get('/', authorizationToken, workorderGet);

router.post('/', authorizationToken, workorderPost);

router.put('/:id', workorderPut);

router.patch('/', workorderPatch);

router.delete('/:id', workorderDelete);

module.exports = router;
