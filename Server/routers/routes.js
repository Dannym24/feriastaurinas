const express = require('express');
const router = express.Router();
const feriaController = require('../controllers/feriacontroller');



router.get('/', feriaController.getFeriasbyNombre);
    
module.exports = router;
