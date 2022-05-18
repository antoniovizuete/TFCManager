

const {Router} = require('express');
const {check} = require('express-validator');

//middlewares
const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares');

const {customerGet, customerPut, customerPost, customerDelete, customerPatch } = require('../controllers/customer.controllers');
const { validCustomerEmail, validPhone, validRole } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');


const router = Router();

router.get('/', authorizationToken, customerGet);

router.post('/',
    authorizationToken,
    [
        check('customer_name', 'El nombre es obligatorio.').not().isEmpty(),
        check('customer_email', 'El email no es válido.').isEmail(),
        check('customer_email').custom(validCustomerEmail),
        check('customer_phone', 'El teléfono no es válido').custom(validPhone),
        validateFields
    ],
    customerPost);

router.put('/:id', customerPut);

router.patch('/', customerPatch);

router.delete('/:id', customerDelete);

module.exports = router;
