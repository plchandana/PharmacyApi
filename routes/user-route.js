const express = require('express');
const router = express.Router();

const {
    allUser,
    login,
    register,
    deleteUser
} = require('../controllers/user-controller')

router.post('/login', login);
router.post('/register', register);
router.delete('/delete/:id', deleteUser);
router.get('/viewAll', allUser);
module.exports = router;
