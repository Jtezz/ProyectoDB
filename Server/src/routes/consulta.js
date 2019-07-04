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
router.get('/consulta',(req,res) => {
    const query=`select * from hora,(select * from horario_medico,(select * from paciente,(select * from consulta,(select MAX(ID_consulta) as maxi from consulta)as aux where ID_consulta=maxi) as consulta1 where  paciente.ID_P=consulta1.ID_Pacient)as paciente1 where paciente1.ID_MH=horario_medico.ID_HM)as aux where aux.ID_H=hora.idHora;`
    mysqlConnection.query(query,(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});
router.post('/agregar/consulta/',(req,res) =>{ //agregar una consulta
    const {MH,pacient,Tipo}=req.body;
    const query=`insert into consulta(ID_MH,ID_Pacient,ID_tipo) value(?,?,?)`;
    mysqlConnection.query(query,[MH,pacient,Tipo],(err,rows,fields) =>{
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