'use strict';
module.exports = (sequelize, DataTypes) => {
  var Substance = sequelize.define('Substance', {
    name: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {tableName: "substances"});
  Substance.associate = function(models) {
    // associations can be defined here
    Substance.belongsToMany(models.Client, {
      as: "substanceList",
      through: 'client_substance'
    })
  };
  return Substance;
};
