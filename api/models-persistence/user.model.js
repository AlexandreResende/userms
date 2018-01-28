
const models = require('../models');

class User {
  static getUser(userId) {
    models.User.find({
      where: {
        id: userId,
      }
    })
      .then(userFoundResult => {
        return userFoundResult;
      })
      .catch(err => {
        throw err;
      });
  }

  static addUser(userSignupInformation) {
    models.User.create({
      name: userSignupInformation.name,
      username: userSignupInformation.username,
      password: userSignupInformation.password,
      email: userSignupInformation.email,
      date_of_birth: userSignupInformation.dateOfBirth,
      active: true,
    })
      .then(userCreated => {
        return userCreated;
      })
      .catch(err => {
        throw err;
      });
  }

  static editUser(userId, userEditInformation) {
    models.User.update(
      userEditInformation,
      {
        where: {
          id: userId,
        }
    })
      .then(userUpdatedResult => {
        return userUpdatedResult;
      })
      .catch(err => {
        throw err;
      });
  }

  static deleteUser(userId) {
    models.User.destroy({
      where: {
        id: userId,
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
