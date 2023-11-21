const express = require('express');
const { register, login, users, updateUser, deleteUser } = require('../controller/user.controller');
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user').get(users);
router.route('/update').put(updateUser);
router.route('/delete').delete(deleteUser);


module.exports = router;