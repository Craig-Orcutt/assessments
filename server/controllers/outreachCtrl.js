'use strict';

module.exports.getAllClients = (req,res,next) => {
  let {Client, Substance, User} = req.app.get('models');
  Client.findAll({include:[Substance, 'therapist']})
  .then(clients=>{
    // console.log('clientssss', clients);

    const clientObj = clients.map(client => {
      return Object.assign(
        {},
        {
          first_name: client.first_name,
          last_name: client.last_name,
          gender: client.gender,
          dob: client.dob,
          frequency: client.frequency,
          last_use: client.last_use,
          length_of_use: client.length_of_use,
          previous_treatment: client.previous_treatment,
          mental_health: client.mental_health,
          si_hi: client.si_hi,
          progress: client.progress,
          severity: client.severity,
          substancesUsed: client.Substances.map(subs => {
              return subs.name
          }),
          therapist: client.therapist.username
        }
      )
    })
    res.status(200).json(clientObj);
  })

}