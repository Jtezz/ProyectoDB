const express = require('express');
const router = express.Router();

const mysqlConnection=require('../database')//traemos la conexion con la db
//medicos
router.get('/medicos',(req,res) => {
    mysqlConnection.query('select * from medico',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});
router.get('/buscar/medicos/:id',(req,res) => {
    const {id}=req.params;
    mysqlConnection.query('select * from medico where idMedico=?',[id],(err,rows,fields) =>{
        //if(row){
          //  res. ('No esta en la base de datos...!');
        //}
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });

});
router.get('/buscar/medicos/espec/:especialidad',(req,res) => {
    const {especialidad}=req.params;
    mysqlConnection.query('select * from medico where ID_espec=?',[especialidad],(err,rows,fields) =>{
        //if(row){
          //  res. ('No esta en la base de datos...!');
        //}
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });

});

//Contratar medico
router.post('/medico/contratar',(req,res) =>{
    const {nombre,especialidad,edad,f_nacimiento,contratado}=req.body;
    const query=`INSERT INTO medico (nombre,ID_espec,edad,F_nacimiento,contratado) value (?,?,?,?,?)`;
    mysqlConnection.query(query,[nombre,especialidad,edad,f_nacimiento,contratado],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Medico contratado con exito!'});
    }else{
        console.log(err);
    }
    });
});


router.put('/medicos/despedir/:id',(req,res) =>{
    const {id}=req.params;
    const query=`update medico set contratado=0 where idMedico=?`;
    
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Medico despedido exitosamente!'});//entrega cada fila de la consulta
    }else{
        console.log(err);
    }
    });
});



module.exports=router;//para exportar las rutas
