const express = require('express');
const router = express.Router();


const mysqlConnection=require('../database')//traemos la conexion con la db
router.get('/isapre',(req,res) => {
    mysqlConnection.query('select * from isapre',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});

module.exports=router;//para exportar las rutas