
const Joi = require('joi');

const UserModel = require('../models-persistence/user.model');

module.exports.getUser = (req, res, next) => {
  const getUserResponse = UserModel().getUser(req.params.userId);
  
  res.status(200).send({
    result: getUserResponse,
    error: ''
  });
};

module.exports.addUser = (req, res, next) => {
  const userSchema = {
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    date_of_birth: Joi.string().required()
  };
  const userValidation = Joi.validate(req.body, userSchema);

  Promise
    .all([userValidation])
    .then(result => {
      const addUserResponse = UserModel().addUser(req.body);
      
      res.status(201).send({
        result: addUserResponse,
        error: ''
      });
    })
    .catch(() => {
      res.status(500).send({
        result: '',
        error: 'An error occurred in addUser controller'
      });
    });
};

module.exports.editUser = (req, res, next) => {
  const userSchema = {
    name: Joi.string().optional(),
    username: Joi.string().optional(),
    password: Joi.string().optional(),
    email: Joi.string().email().optional(),
    date_of_birth: Joi.string().optional()
  };
  const userValidation = Joi.validate(req.body, userSchema);

  Promise
    .all([userValidation])
    .then(result => {
      const editUserResponse = UserModel().editUser(reqp.params.userId, req.body);

      res.status(204).send({
        result: editUserResponse,
        error: ''
      })
    })
    .catch(() => {
      res.status(500).send({
        result: '',
        error: 'An error occurred in editUser controller'
      });
    });
};

module.exports.deleteUser = (req, res, next) => {
  const deleteUserResponse = UserModel().deleteUser(req.params.userId);
  
  res.status(204).send({
    result: deleteUserResponse,
    error: ''
  });
};