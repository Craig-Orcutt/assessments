'use strict';
module.exports = (sequelize, DataTypes) => {
  var Substance = sequelize.define('Substance', {
    name: DataTypes.STRING,
    points: DataTypes.FLOAT
  }, {tableName: "substances"});
  Substance.associate = function(models) {
    // associations can be defined here
    Substance.belongsToMany(models.Client, {
      through: 'client_substance'
    })
  };
  return Substance;
};
