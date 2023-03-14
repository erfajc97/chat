const { DataTypes} = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

    },

    userName : {
        type: DataTypes.STRING(30),
        unique:true,
        allowNull: false,
        field: 'user_name',
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
        isEmail: true,
    },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName :{
        type: DataTypes.STRING(30),
        field: 'first_name'
    },
    lastName :{
        type: DataTypes.STRING(30),
        field: 'last_name'
    },
    
})