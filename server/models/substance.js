'use strict';
module.exports = (sequelize, DataTypes) => {
  var Substance = sequelize.define('Substance', {
    name: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {});
  Substance.associate = function(models) {
    // associations can be defined here
  };
  return Substance;
};