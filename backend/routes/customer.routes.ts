

const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const {customerGet, customerPut, customerPost, customerDelete, customerPatch } = require('../controllers/customer.controllers');
const { validRole, validEmail, validUserId } = require('../helpers/dbValidators');


const router = Router();

router.get('/', customerGet);

router.post('/', customerPost);

router.put('/:id', customerPut);

router.patch('/', customerPatch);

router.delete('/:id', customerDelete);

module.exports = router;
