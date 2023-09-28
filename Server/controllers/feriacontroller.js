const Feria= require('../models/feria')

exports.getFeriasbyNombre= async(req, res) =>{
    try{
        const ferias= await Feria.find()
        res.json(ferias)
  
        
  
   }catch(error){
      res.status(500).json({error: 'Error al obtener los datos'})
   }
  }
  
