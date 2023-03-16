const { Router } = require("express");
const route = Router();
const conversationsController = require("../controllers/conversation.controller");

route.post(
  "/api/v1/conversations",
  conversationsController.createConversations
);
route.get("/api/v1/conversations", conversationsController.getAllConversations);

module.exports = route;
