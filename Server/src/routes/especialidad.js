const express = require('express');
const router = express.Router();

router.get('/especialidades',(req,res) => {
    mysqlConnection.query('select * from especialidad',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas