"use strict";

let models = require("./server/models");
let { substances } = require("./server/seeders/substance");
let { clients } = require("./server/seeders/client");
let { clientsSubstance } = require("./server/seeders/clientsubstance");

models.sequelize
  .sync({ force: true })
  .then(queryInterface => {
    return models.Substance.bulkCreate(substances);
  })
  .then(queryInterface => {
    return models.Client.bulkCreate(clients);
  })
  .then(() => {
    process.exit();
  });
