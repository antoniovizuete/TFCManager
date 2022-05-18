
const {Router} = require('express');
//const {check} = require('express-validator');

//middlewares
//const { validateFields, validateJWT } = require('../middlewares');

const { materialGet, materialPut, materialPost, materialDelete, materialPatch } = require('../controllers/material.controllers');
const { } = require('../helpers/dbValidators');
const { authorizationToken } = require('../middlewares/authorizationToken');

const router = Router();

router.get('/', authorizationToken, materialGet);

router.post('/', authorizationToken, materialPost);

router.put('/:id', materialPut);

router.patch('/', materialPatch);

router.delete('/:id', materialDelete);

module.exports = router;




