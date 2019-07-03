import { Component, OnInit } from '@angular/core';




//componenetes
import {PacienteFormComponent} from '../paciente-form/paciente-form.component';// intentar traer el paciente
import {BuscarPacienteComponent}from '../buscar-paciente/buscar-paciente.component';

//modelos
import { buscadorP } from 'src/app/modelos/buscadorP';
import {Buscador} from 'src/app/modelos/buscador';
import{Medico}from '../../modelos/Medico';
import {especialidad} from '../../modelos/especialidad';

//servicios utilizacods
 import {H_MgService} from'src/app/servicios/H_Mg.service';
 import {MedicoService} from 'src/app/servicios/medico.service';
 import{EspecialidadService} from '../../servicios/especialidad.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {
  //Variables globales
  especialidades:any=[];
  buscador:Buscador={
    ID:null
  };
  buscador2:Buscador={
    ID:null
  };
  buscador3:Buscador={
    ID:null
  };
  medicos:any=[];
  Horas:any=[];
  aux:boolean=false;//nos ayuda a que no de error al ecoger hora
  consulta:any={
    medico:this.buscador2,
    horaMedico:this.buscador3,


  }

  constructor(private especialidadesService:EspecialidadService,
    private medicoService:MedicoService,
    private buscarHorarioMedicoService:H_MgService) { }

  ngOnInit() {//paso 1 , carga todas las especialidades al arreglo especialidades
    this.especialidadesService.getEspecialidades().subscribe(
      res=>{
        this.especialidades=res; 
        console.log(res);
        console.log(this.especialidades);
      },
      err =>console.error(err)
      
    )
  }
  //paso 2 busca el medico segun su especialidad
    buscarmedicoEspecialidad() {
      this.medicoService.buscarEspec(this.buscador.ID).subscribe(//guarda en buscador.Id el Id de la especialidad
        res => {
          this.medicos=res;
          console.log(this.medicos);
        },
        err => console.log(err)
      )
    }
    //paso 3 busca el horario del medico 
    //arreglar , tenemos un problema con la consulta de las horas y como las devuelve 01-07-2019
    escojerMedico(){
      this.buscarHorarioMedicoService.buscarmedH_M(this.buscador2.ID).subscribe(//guarda en buscador2.Id el id del medico
        res =>{
          this.aux=true;
          this.Horas=res;
          console.log(this.buscador2);
          console.log(this.Horas);
        },
        err=>console.log(err)
      )
    }
    prueba1(){
      console.log(this.buscador3);
    }
  //paso 3 buscar horas segun medico
    
  
}
