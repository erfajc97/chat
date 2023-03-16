
const UserConversationServices = require("../services/userConversation.services");

const crearParticipants = async(req, res, next) =>{

    try {
        const data = req.body;
        const result = await UserConversationServices.createPairConversation(data);
        res.status(200).json({
            status: "succes",
            result
        })

    } catch (error) {
        next(error)
    }
}

const getParticipants = async( req, res, next)=>{
    try {
        
        const result = await UserConversationServices.getAll();
        res.json(result)
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
  crearParticipants,
  getParticipants,
};