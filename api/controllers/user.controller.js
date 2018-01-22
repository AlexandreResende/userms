
const Joi = require('joi');

module.exports.getUser = (req, res, next) => {
  //call model
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
      //call model
    })
    .catch(() => {
      res.status(500).send({ error: 'An error occurred in addUser controller' });
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
      //call model
    })
    .catch(() => {
      res.status(500).send({ error: 'An error occurred in editUser controller' });
    });
};

module.exports.deleteUser = (req, res, next) => {
  //call model
};