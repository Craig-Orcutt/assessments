'use strict';

module.exports.getAllClients = (req,res,next) => {
  let {Client, Substance, User} = req.app.get('models');
  Client.findAll({include:[Substance, 'therapist']})
  .then(clients=>{
    console.log('clients', clients);
    
    const clientObj = clients.map(client => {

      
      return Object.assign(
        {},
        {
          id: client.id,
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
              return subs.name.charAt(0).toUpperCase() + subs.name.slice(1)
          }),
          therapist: client.therapist.username,
          inquiry: client.createdAt
        }
      )
    
      
    })
    
    res.status(200).json(clientObj);
  })

}

module.exports.sortBySeverity = (req,res,next) => {
  let {Client, Substance, User} = req.app.get('models');
  Client.findAll({include:[Substance, 'therapist'], order:[['severity' , 'DESC']]})
  .then(clients=>{
    console.log('clientssss', clients);

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
              return subs.name.charAt(0).toUpperCase() + subs.name.slice(1)
          }),
          therapist: client.therapist.username,
          inquiry: client.createdAt
        }
      )
    
      
    })
    
    res.status(200).json(clientObj);
  })

}

module.exports.sortByGender = (req,res,next) => {
  let {Client, Substance, User} = req.app.get('models');
  Client.findAll({include:[Substance, 'therapist'], order:[['gender' , 'DESC']]})
  .then(clients=>{
    console.log('clients', clients);
    

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
              return subs.name.charAt(0).toUpperCase() + subs.name.slice(1)
          }),
          therapist: client.therapist.username,
          inquiry: client.createdAt
        }
      )
    
      
    })
    
    res.status(200).json(clientObj);
  })

}

module.exports.sortByInquiryDate = (req,res,next) => {
  let {Client, Substance, User} = req.app.get('models');
  Client.findAll({include:[Substance, 'therapist'], order:[['createdAt' , 'DESC']]})
  .then(clients=>{
    console.log('clients', clients);
    

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
              return subs.name.charAt(0).toUpperCase() + subs.name.slice(1)
          }),
          therapist: client.therapist.username,
          inquiry: client.createdAt
        }
      )
    
      
    })
    
    res.status(200).json(clientObj);
  })

}

module.exports.sortByTherapist = (req,res,next) => {
  let {Client, Substance, User} = req.app.get('models');
  Client.findAll({include:[Substance, 'therapist'], order:[['therapist_id' , 'DESC']]})
  .then(clients=>{
    console.log('clients', clients);
    

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
              return subs.name.charAt(0).toUpperCase() + subs.name.slice(1)
          }),
          therapist: client.therapist.username,
          inquiry: client.createdAt
        }
      )
    
      
    })
    
    res.status(200).json(clientObj);
  })

}

module.exports.deleteClient = (req,res,next) => {
  console.log('client', req.body.id);
  let id = req.body.id
  let {Client, Substance, User} = req.app.get('models');
  Client.destroy({where:{id}})
  .then((data)=>{
    res.status(200).json(data)
  })
}