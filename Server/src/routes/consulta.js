const express = require('express');
const router = express.Router();
//metodos

router.get('/consultas',(req,res) => {
    mysqlConnection.query('select * from consulta limit 10',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});

router.post('/agregar/consulta',(req,res) =>{ //agregar una consulta
    const {hora,paciente,tipo}=req.body;
    const query=`insert into consulta(ID_MH,ID_Pacient,ID_tipo) value(?,?,?)`;
    mysqlConnection.query(query,[hora,paciente,tipo],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Consulta agregar con exito!'});
    }else{
        console.log(err);
    }
    });
});

router.delete('/consulta/:id',(req,res) =>{ //eliminar una consulta
    const {id}=req.params;
    const query=`Delete from consulta where id_consulta=?`;
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Consulta eliminada con exito!'});
    }else{
        console.log(err);
    }
    });
});


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas