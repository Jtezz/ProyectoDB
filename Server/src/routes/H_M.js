const express = require('express');
const router = express.Router();

const mysqlConnection=require('../database')
//guardar hora_medico
router.post('/admin/g_h_m',(req,res) =>{
    const {iD_MED,iD_H,disponible}=req.body;
    const query=`INSERT INTO horario_medico(ID_MED,ID_H,Disponible) values(?,?,?)`;
    mysqlConnection.query(query,[iD_MED,iD_H,disponible],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Hora medica guardada con exito!'});
    }else{
        console.log(err);
    }
    });
});
router.get('/admin/b_h_m/:ID',(req,res) => {
    const {ID}=req.params;
    mysqlConnection.query('select hora.Bloque,hora.Fecha,medico.Nombre from medico,hora,(select * from horario_medico where ID_HM=?) AS com where com.ID_H=hora.idHora and com.ID_MED=medico.idMedico',[ID],(err,rows,fields) =>{
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
router.get('/admin/bm_h_m/:ID',(req,res) => {
    const {ID}=req.params;
    mysqlConnection.query('select com.ID_HM,hora.idHora,hora.Bloque,hora.Fecha,medico.Nombre from medico,hora,(select * from horario_medico where ID_MED=?) AS com where com.ID_H=hora.idHora and com.ID_MED=medico.idMedico and com.Disponible=1',[ID],(err,rows,fields) =>{
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
router.get('/HorarioMedico',(req,res) => {
    mysqlConnection.query('select horario_medico.ID_HM,hora.idHora,hora.Bloque,hora.Fecha,medico.Nombre from medico,horario_medico,hora where horario_medico.ID_H=hora.idHora and horario_medico.ID_MED=medico.idMedico and horario_medico.Disponible=1;',(err,rows,fields) =>{
        if(!err){
            res.json(rows);//entrega cada fila de la consulta
        }else{
            console.log(err);
        }
    });
});
router.put('/admin/cambiardisp/:ID_HM',(req,res) =>{
    const {ID_HM}=req.params;
    const query=`update horario_medico set Disponible=0 where ID_HM=?`;
    
    mysqlConnection.query(query,[ID_HM],(err,rows,fields) =>{
    if(!err){
        res.json({Status: 'Disponibilidad cambiada!'});//entrega cada fila de la consulta
    }else{
        console.log(err);
    }
    });
});
router.get('/admin/buscar_Horarios_Medico/:ID',(req,res) =>{//solo utilizada para bd con Hora.hora y no Hora.bloque
    const {ID}=req.params;
    const query=`select horario_medico.ID_HM,hora.idHora,hora.bloque,hora.Fecha,medico.Nombre from horario_medico,medico,hora,(select * from horario_medico where horario_medico.ID_MED=?) AS com where com.ID_H=hora.idHora and com.ID_MED=medico.idMedico and horario_medico.ID_H=hora.idHora and horario_medico.Disponible=1`;
    
    mysqlConnection.query(query,[ID],(err,rows,fields) =>{
    if(!err){
        res.json(rows);
    }else{
        console.log(err);
    }
    });
});
module.exports=router;