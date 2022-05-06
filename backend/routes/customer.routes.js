

const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const {customerGet, customerPut, customerPost, customerDelete, customerPatch } = require('../controllers/customer.controllers');
const { validCustomerEmail, validPhone, validRole } = require('../helpers/dbValidators');


const router = Router();

router.get('/', customerGet);

router.post('/',[
    check('name', 'El nombre es obligatorio.').not().isEmpty(),
    check('email', 'El email no es válido.').isEmail(),
    check('email').custom(validCustomerEmail),
    check('phone', 'El teléfono no es válido').custom(validPhone),
    check('role').custom(validRole),
    validateFields
],customerPost);

router.put('/:id', customerPut);

router.patch('/', customerPatch);

router.delete('/:id', customerDelete);

module.exports = router;
