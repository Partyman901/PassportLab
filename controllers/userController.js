const userModel = require("../models/userModel").userModel;
const database = require("../models/userModel").database;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

const findOrCreate = (userID, err) => {
  console.log(userID)
  if (userID in database) {
    return userID
  } else {
    database.push({ id: userID, role: "user"})
    return userID
  }
};

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  findOrCreate
};
