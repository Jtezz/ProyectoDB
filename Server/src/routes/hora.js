const express = require('express');
const router = express.Router();
//metodos

router.post('/agregar/hora',(req,res) =>{ //agregar hora
    const {Bloque,Fecha}=req.body;
    const query=`INSERT INTO hora(Bloque,Fecha) values(?,?)`;
    mysqlConnection.query(query,[Bloque,Fecha],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Hora agregada con exito!'});
    }else{
        console.log(err);
    }
    });
});
router.get('/admin/hora',(req,res) => {
    mysqlConnection.query('select * from hora',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});

const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas