
const express = require('express');
const router = express.Router();
const {
  getUser,
  getUsers,
  addUser,
  editUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/users/:userId', getUser);

router.get('/users', getUsers);

router.post('/users', addUser);

router.put('/users/:userId', editUser);

router.delete('/users/:userId', deleteUser);

module.exports = router;
