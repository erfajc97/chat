const Conversations = require("../models/conversations.models");

class ConversationServices {
  static async create(data) {
    try {
      const result = await Conversations.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Conversations.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  
}

module.exports = ConversationServices;
