const express = require('express');
const router = express.Router();


//metodos
router.get('/paciente',(req,res) => {
    mysqlConnection.query('select * from paciente',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});

router.get('/paciente/:id',(req,res) => {
    const {id}=req.params;
    mysqlConnection.query('select * from paciente where ID_P=?',[id],(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});

router.post('/paciente',(req,res) =>{
    const {id,nombre,genero,edad,isapre,f_nacimiento}=req.body;
    const query=`INSERT INTO paciente (ID_P,nombre,genero,edad,ISAPRE,F_nacimiento) value (?,?,?,?,?,?)`;
    mysqlConnection.query(query,[id,nombre,genero,edad,isapre,f_nacimiento],(err,rows,fields) =>{
    if(!err){
        console.log('Paciente agregado con exito!');
        res.json({Status: 'Paciente agregado con exito!'});//entrega cada fila de la consulta
    }else{
        console.log(err);
    }
    });
});

const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas