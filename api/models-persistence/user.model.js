
const models = require('../models');

class User {
  static getUser(req) {
    models.User.find({
      where: {
        id: req.params.id,
      }
    })
      .then(userFoundResult => {
        return userFoundResult;
      })
      .catch(err => {
        throw err;
      });
  }

  static addUser(req) {
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      date_of_birth: req.body.dateOfBirth,
      active: true
    })
      .then(userCreated => {
        return userCreated;
      })
      .catch(err => {
        throw err;
      });
  }

  static editUser(req) {
    models.User.update(
      req.body,
      {
        where: {
          id: req.params.userId
        }
    })
      .then(userUpdatedResult => {
        return userUpdatedResult;
      })
      .catch(err => {
        throw err;
      });
  }

  static deleteUser(req) {
    models.User.destroy({
      where: {
        id: req.parms.id
      }
    })
      .then(userToBeDeleted => {
        return userToBeDeleted;
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = User;
