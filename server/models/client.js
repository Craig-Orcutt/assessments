'use strict';
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define('Client', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING,
    frequency: DataTypes.STRING,
    last_use: DataTypes.STRING,
    length_of_use: DataTypes.STRING,
    previous_treatment: DataTypes.TEXT,
    mental_health: DataTypes.STRING,
    si_hi: DataTypes.STRING,
    progress: DataTypes.STRING,
    severity: DataTypes.FLOAT,
    comment: DataTypes.STRING
  }, {tableName: "clients", paranoid:true});
  Client.associate = function(models) {
    // associations can be defined here
    Client.belongsTo(models.User, {
      foreignKey: "therapist_id",
      as: "therapist"
    });
    Client.belongsToMany(models.Substance, {
      through: 'clientSubstance'
    })
  };
  return Client;
};