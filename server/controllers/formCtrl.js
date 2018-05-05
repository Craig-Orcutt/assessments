'use strict';

module.exports.getSubstances = (req, res, next) => {
  let {Substance} = req.app.get("models");
  Substance.findAll({raw:true})
  .then((data)=>{
    res.status(200).json(data);
  })
  .catch(err=>{
    console.log('ERROR', err );
  })
}

module.exports.addClientSubstance = (req,res,next)=> {

    client_substance.create({ client_id, substance_id })
      .then(() => {
        res.status(201).end(); // 201 = new resource created
      })
      .catch(err => {
        next(err);
      });
}


// let {Client} = req.app.get("models");
// Client.findById(client_id)
// .then(foundClient => {
//     foundClient.addsubstanceList(substance_id)
//         .then((newRecord) => {
// res.status(201).json(newRecord);
//         })
//       })