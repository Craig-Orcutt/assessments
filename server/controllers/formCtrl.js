'use strict';

module.exports.getSubstances = (req, res, next) => {
  let {Substance} = req.app.get("models");
  Substance.findAll({raw:true})
  .then((data)=>{
    console.log('data',data ); 
    res.status(200).json(data);
  })
  .catch(err=>{
    console.log('ERROR', err );
  })
}