
const express = require('express');
const router = express.Router();
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', getUser);

router.post('/', addUser);

router.put('/:userId', editUser);

router.delete('/:userId', deleteUser);

module.exports = router;
