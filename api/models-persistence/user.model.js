
const models = require('../models');

class User {
  static getUser(userId) {
    return new Promise((resolve, reject) => {
      models.User.find({
        where: {
          id: userId,
        }
      })
        .then(userFoundResult => {
          resolve(userFoundResult);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static addUser(userSignupInformation) {
    return new Promise((resolve, reject) => {
      models.Users.create({
        name: userSignupInformation.name,
        username: userSignupInformation.username,
        password: userSignupInformation.password,
        email: userSignupInformation.email,
        date_of_birth: userSignupInformation.date_of_birth,
        active: true,
      })
        .then(userCreated => {
          resolve(userCreated);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static editUser(userId, userEditInformation) {
    return new Promise((resolve, reject) => {
      models.User.update(
        userEditInformation,
        {
          where: {
            id: userId,
          }
      })
        .then(userUpdatedResult => {
          resolve(userUpdatedResult);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      models.User.destroy({
        where: {
          id: userId,
        }
      })
        .then(userToBeDeleted => {
          resolve(userToBeDeleted);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = User;
