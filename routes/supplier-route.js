const express = require('express');
const router = express.Router();

const {
    allSupplier,
    supplierRegister,
    supplierDelete,
    findSupplier,
    updateSupplier
} = require('../controllers/supplier-controller')

router.get('/allsupllier', allSupplier);
router.post('/create', supplierRegister);
router.delete('/delete/:id', supplierDelete);
router.get('/findSupplier/:id',findSupplier);
router.put('/editSupplier/:id',updateSupplier);
module.exports = router;
