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
    const query=`select * from hora,(select * from horario_medico,(select * from paciente,(select * from consulta,(select MAX(ID_consulta) as maxi from consulta)as aux where ID_consulta=maxi) as consulta1 where  paciente.ID_P=consulta1.ID_Pacient)as paciente1 where paciente1.ID_MH=horario_medico.ID_HM)as aux where aux.ID_H=hora.idHora`
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
router.get('/consulta_examen/mostrar/:ID',(req,res) => {
    const {ID}=req.params;
    mysqlConnection.query('select ID_consulta from consulta where ID_Tipo=2 and ID_MH=?',[ID],(err,rows,fields) =>{
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
    router.post('/agregar/consulta_examen/',(req,res) =>{ //agregar una consulta
        const {ID_ex,ID_c}=req.body;
        const query=`insert into consulta_examen(ID_Examen,ID_Con) value(?,?)`;
        mysqlConnection.query(query,[ID_ex,ID_c],(err,rows,fields) =>{
        if(!err){
            res.json({Status: 'Consulta agregar con exito!'});
        }else{
            console.log(err);
        }
        });
    });
    router.get('/admin/historial/:id',(req,res) =>{ 
        const {id}=req.params;
        const query=`select consulta_medicina.diagnostico from consulta_medicina,consulta where consulta_medicina.ID_C=consulta.ID_Consulta and consulta.ID_Pacient=?;`;
        mysqlConnection.query(query,[id],(err,rows,fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
        });
    });


const mysqlConnection=require('../database')//traemos la conexion con la db
module.exports=router;//para exportar las rutas