'use strict';

module.exports.getSubstances = (req, res, next) => {
  let {Substance} = req.app.get("models");
  Substance.findAll({raw:true})
  .then((data)=>{
    console.log('user', req.app.get(currentUser));
    
    res.status(200).json(data);
  })
  .catch(err=>{
    console.log('ERROR', err );
  })
}

module.exports.addClientSubstance = (req,res,next)=> {
  let { client_substance} = req.app.get('models');
    client_substance.create({ 
      ClientId: req.body.clientId, 
      SubstanceId })
      .then(() => {
        res.status(201).end(); // 201 = new resource created
      })
      .catch(err => {
        next(err);
      });
}

module.exports.addClientForm = (req,res,next)=> {
  let { Client , client_substance} = req.app.get('models');
  Client.create({
    first_name : req.body.first_name,
    last_name: req.body.lastName,
    dob: req.body.age,
    gender: req.body.gender,
    frequency: req.body.frequency,
    last_use: req.body.last_use,
    length_of_use: req.body.useLength,
    previous_treatment: req.body.previousSubstance,
    mental_health: req.body.previousMentalHealth,
    si_hi: req.body.si_hi

  })
    .then(()=>{
      res.status(201).end(); // 201 = new resource created
    })
  .catch(err => {
    next(err);
  });
}


// module.exports.addClientForm = ({app, }req,res,next)=> {
//   let {Client} = req.app.get("models");
//   Client.findById(client_id)
//   .then(foundClient => {
//       foundClient.addsubstanceList(SubstanceId)
//           .then((newRecord) => {
//   res.status(201).json(newRecord);
//           })
//         })
// }



// componentDidMount() {
//   this.callApi()
//     .then((data)=>{
//       console.log('data', data);
      
      
//     })
//     .catch(err => console.log(err));
// }
// callApi = async () => {
//   const response = await fetch('http://localhost:5000/server/form');
//   const body = await response.json();

//   if (response.status !== 200) throw Error(body.message);

//   return body;
// };