'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isOutreach: DataTypes.BOOLEAN
  }, {tableName: "users"});
  User.associate = function(models) {
    User.hasMany(models.Client,{
      foreignKey: "user_id"
    })

    // associations can be defined here
  };
  return User;
};