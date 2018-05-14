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



module.exports.addClientForm = (req,res,next)=> {
  let { Client } = req.app.get('models');
  console.log('req.body', req.body);
  let substance = req.body.substancesUsed
  Client.create({
    first_name : req.body.firstName,
    last_name: req.body.lastName,
    dob: req.body.age,
    gender: req.body.gender,
    frequency: req.body.frequency,
    last_use: req.body.lastUse,
    length_of_use: req.body.useLength,
    previous_treatment: req.body.previousSubstance,
    mental_health: req.body.previousMentalHealth,
    si_hi: req.body.si_hi,
    severity: req.body.points,
    therapist_id: req.body.userid

  })
    .then((data)=>{
      console.log('data', data.dataValues.id);
      Client.findById(data.dataValues.id)
      .then((foundClient) => {      
          foundClient.addSubstances(substance)
          .then((newRecord) => {
            res.status(201).json(newRecord);
            })
      })
      // GET THE CLIENT ID THAT WAS JUST CREATED TO ADD TO JOIN TABLE
      // res.status(201).end(); // 201 = new resource created
    })
  .catch(err => {
    next(err);
  });
}


