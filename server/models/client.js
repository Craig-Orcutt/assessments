'use strict';
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define('Client', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING,
    frequency: DataTypes.STRING,
    last_use: DataTypes.STRING,
    previous_treament: DataTypes.STRING,
    mental_health: DataTypes.STRING,
    si_hi: DataTypes.STRING
  }, {tableName: "clients"});
  Client.associate = function(models) {
    // associations can be defined here
    Client.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Client.belongsToMany(models.Substance, {
      through: 'ClientSubstance'
    })
  };
  return Client;
};