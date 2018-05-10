"use strict";

let models = require("./server/models");
let { substances } = require("./server/seeders/substance");


models.sequelize
  .sync({ force: true })
  .then(queryInterface => {
    return models.Substance.bulkCreate(substances);
  })
  .then(() => {
    process.exit();
  });
