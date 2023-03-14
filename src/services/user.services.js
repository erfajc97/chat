const Users = require("../models/users.models");

class UserServices {
  static async create(data) {
    try {
      const result = await Users.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const user = await Users.findAll({
        attributes: ["id", "email", "password"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(email) {
    try {
      const result = await Users.findOne({
        where: { email },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserServices;