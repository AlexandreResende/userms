
const Joi = require('joi');

const UserModel = require('../models-persistence/user.model');

module.exports.getUser = (req, res, next) => {
  const getUserResponse = UserModel.getUser(req.params.userId);
  
  getUserResponse
    .then((userFound) => {
      res.status(200).send({
        result: userFound,
        error: '',
      });
    })
    .catch(() => {
      res.status(500).send({
        result: '',
        error: 'User not found',
      });
    });
};

module.exports.getUsers = (req, res, next) => {
  const getUserResponse = UserModel.getUsers();
  
  getUserResponse
    .then((userFound) => {
      res.status(200).send({
        result: userFound,
        error: '',
      });
    })
    .catch(() => {
      res.status(500).send({
        result: '',
        error: 'Users not found',
      });
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
      const addUserResponse = UserModel.addUser(req.body);

      addUserResponse
        .then((userCreated) => {
          res.status(201).send({
            result: userCreated,
            error: '',
          });
        })
        .catch(() => {
          res.status(201).send({
            result: '',
            error: 'User not created',
          });
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
      const editUserResponse = UserModel.editUser(req.params.userId, req.body);

      editUserResponse
        .then((userEditInfo) => {
          res.status(200).send({
            result: userEditInfo[0],
            error: '',
          });
        })
        .catch(() => {
          res.status(200).send({
            result: '',
            error: 'Edit user not possible',
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        result: '',
        error: 'An error occurred in editUser controller',
      });
    });
};

module.exports.deleteUser = (req, res, next) => {
  const deleteUserResponse = UserModel.deleteUser(req.params.userId);
  
  deleteUserResponse
    .then((userDeletion) => {
      res.status(200).send({
        result: userDeletion,
        error: '',
      });
    })
    .catch(() => {
      res.status(200).send({
        result: '',
        error: 'User deletion not possible',
      });
    });
};