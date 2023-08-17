const {DataTypes} = require('sequelize');
const sequelize = require('../dbConnector');

const Hero = sequelize.define('heroes',{
    hero_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    hero_name:{
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    createdAt: false
});

module.exports = Hero;