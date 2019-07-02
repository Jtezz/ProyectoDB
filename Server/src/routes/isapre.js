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
router.post('/admin/guardar/isapre',(req,res) =>{
    const {des}=req.body;
    const query=`INSERT INTO isapre (Descripcion) values (?)`;
    mysqlConnection.query(query,[des],(err,rows,fields) =>{
        if(!err){
            res.json({Status: 'Isapre guardado con exito!'});
        }else{
            console.log(err);
        }
        });
    });

module.exports=router;//para exportar las rutas