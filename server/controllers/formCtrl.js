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
  let {client_substance} = req.app.get('models');
    client_substance.create({ ClientId, SubstanceId })
      .then(() => {
        res.status(201).end(); // 201 = new resource created
      })
      .catch(err => {
        next(err);
      });
}
// let {Client} = req.app.get("models");
// Client.findById(ClientId)
// .then(foundClient => {
//     foundClient.addsubstanceList(SubstanceId)
//         .then((newRecord) => {
// res.status(201).json(newRecord);
//         })
//       })

// module.exports.addClientForm = (req,res,next)=> {
//   let {Client} = req.app.get("models");
//   Client.findById(ClientId)
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