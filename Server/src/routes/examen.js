const express = require('express');
const router = express.Router();
const mysqlConnection=require('../database')//traemos la conexion con la db
//guardar examen
router.post('/admin/guardar/examen',(req,res) =>{
    const {des}=req.body;
    const query=`INSERT INTO examenes (Descripcion) values (?)`;
    mysqlConnection.query(query,[des],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'examen guardado con exito!'});
    }else{
        console.log(err);
    }
    });
});
module.exports=router;//para exportar las rutas