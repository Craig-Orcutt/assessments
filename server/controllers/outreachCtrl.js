'use strict';

module.exports.getAllClients = (req,res,next) => {
  let {Client} = req.app.get('models');
  Client.findAll({raw:true})
  .then((data)=>{
    
    res.status(200).json(data);
  })
  
}