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
module.exports=router;