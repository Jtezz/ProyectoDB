const express = require('express');
const app = express();
var cors=require('cors');


//Settings/Configuraciones
app.set('port',process.env.PORT || 3000);//configuracion del puerto


//estamos usando el modelo de 'nodemon' para el desarrollo de la api sirve para refrescar constamente el servidor

//Middlewares/funciones
app.use(express.json());   //reemplaza a bodparcer para trasformas en jason
app.use(cors());


//Rutas/urls(routes)
app.use(require('./routes/medicos'));
app.use(require('./routes/paciente'));
app.use(require('./routes/consulta'));


app.listen(app.get('port'),() => {
    console.log('Server on!', app.get('port'));
});