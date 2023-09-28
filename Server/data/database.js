const mongoose = require('mongoose')

async function connectDatabase () {
    try {
        await mongoose.connect('mongodb+srv://dannymeyercastro:Antonella27@cluster0.yqy67o0.mongodb.net/TOROS?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

        console.log('Conexion a la base de datos establecida')

        }catch(error) {
         console.log('Error de conexión a la database', error);
        }
    }

    module.exports = connectDatabase


