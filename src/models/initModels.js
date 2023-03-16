const Conversations = require("./conversations.models");
const Messages = require("./messages.models");
const UserConversations = require("./userConversation.models");
const Users = require("./users.models");

const initModel = () => {
  // Relación 1 a muchos entre User y Conversation (User tiene muchas Conversations, Conversation pertenece a un User)
  

  // Relación 1 a muchos entre User y Message (User tiene muchos Messages, Message pertenece a un User)
  Users.hasMany(Messages, { foreignKey: "userId" });
  Messages.belongsTo(Users, { foreignKey: "userId" });

  // Relación 1 a muchos entre Conversation y Message (Conversation tiene muchos Messages, Message pertenece a una Conversation)
  Conversations.hasMany(Messages, { foreignKey: "conversationsId" });
  Messages.belongsTo(Conversations, { foreignKey: "conversationsId" });

  // Relación muchos a muchos entre User y Conversation a través de UserConversation
  // Users.belongsToMany(Conversations, {
  //   through: UserConversations});
  // Conversations.belongsToMany(Users, {
  //   through: UserConversations});
  
  Users.hasMany(UserConversations, { foreignKey: "userId" });
  UserConversations.belongsTo(Users, { foreignKey: "userId" });

  Conversations.hasMany(UserConversations, { foreignKey: "conversationId" });
  UserConversations.belongsTo(Conversations, {
    foreignKey: "conversationId",
  });

};

module.exports = initModel;
