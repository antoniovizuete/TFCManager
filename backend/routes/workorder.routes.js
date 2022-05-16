
const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const { workorderGet, workorderPut, workorderPost, workorderDelete, workorderPatch } = require('../controllers/workorder.controllers');
const { validRole, validUserEmail } = require('../helpers/dbValidators');


const router = Router();

router.get('/', workorderGet);

router.post('/', workorderPost);

router.put('/:id', workorderPut);

router.patch('/', workorderPatch);

router.delete('/:id', workorderDelete);

module.exports = router;
