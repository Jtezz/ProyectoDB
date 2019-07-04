import { Component, OnInit, HostBinding,Input} from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
import { paciente } from 'src/app/modelos/paciente';
import {isapre}from 'src/app/modelos/isapre';
import{ IsapresService} from 'src/app/servicios/isapres.service';
import { buscadorP } from 'src/app/modelos/buscadorP';
import { Buscador } from 'src/app/modelos/buscador';
import {H_MgService} from'src/app/servicios/H_Mg.service';
import {MedicoService} from 'src/app/servicios/medico.service';
import{EspecialidadService} from '../../servicios/especialidad.service';
import{ConsultaService}from'../../servicios/consulta.service';
import { consulta } from 'src/app/modelos/consulta';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  @HostBinding("class") classes ="row";
  paciente:paciente={//paciente del tipo paciente
    id: '',
    nombre: '',
    genero:'',
    telefono: null,
    isapre:null,
    f_nacimiento: null,
    email:null
  };
  isapres:any=[];
  constructor(private pacienteService:PacienteService,
              private isapreService:IsapresService,
              private especialidadesService:EspecialidadService,
              private medicoService:MedicoService,
              private buscarHorarioMedicoService:H_MgService,
              private consultaService:ConsultaService) { }

  ngOnInit() {
    this.isapreService.getIsapres().subscribe(
      res => {
        this.isapres=res;
        console.log(res)
      },
      err =>console.error(err)
    )
    
  }
  addPaciente(){
    this.pacienteService.postPaciente(this.paciente).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
  }
  public paciente1:buscadorP={
    id:null
  }; 
  public aux:any;
  especialidades:any=[];
  buscador:Buscador={//guarda el id de especialudad para buscar los medicos de esa especialidad
    ID:null
  };
  buscador2:Buscador={// guarda el id del medico para buscar el horario del medico
    ID:null
  };
  buscador3:Buscador={//guarda el id de la hora seleccionada
    ID:null
  };
  medicos:any=[];
  Horas:any=[];
  aux2:boolean=false;//muestra el formulario de llenado paciente
  aux3:boolean=true;//mostrar el formulario de reservar hora
  aux4:boolean=false; 
  consulta:consulta={
    MH:null,
    pacient:'',
    Tipo:1,
  };

  getEspec() {//paso 1 , carga todas las especialidades al arreglo especialidades
    this.especialidadesService.getEspecialidades().subscribe(
      res=>{
        this.aux3=false;//para esconder el formulario de paciente
        this.aux4=true;//para mostrar el formulario de reserva hora
        this.especialidades=res;
      },
      err =>console.error(err)
    )
  }
  //paso 2 busca el medico segun su especialidad
    buscarmedicoEspecialidad() {
      this.medicoService.buscarEspec(this.buscador.ID).subscribe(//guarda en buscador.Id el Id de la especialidad
        res => {
          this.medicos=res;
          console.log(this.paciente1)

        },
        err => console.log(err)
      )
    }
    //paso 3 busca el horario del medico 
    //arreglar , tenemos un problema con la consulta de las horas y como las devuelve 01-07-2019
    escojerMedico(){
      this.buscarHorarioMedicoService.buscarmedH_M(this.buscador2.ID).subscribe(//guarda en buscador2.Id el id del medico
        res =>{
          this.aux2=true;
          this.Horas=res;
          console.log(this.buscador2);
          console.log(this.Horas);
        },
        err=>console.log(err)
      )
    }
  
    insertarConsulta(){
      this.consulta.MH=this.buscador3.ID;
      this.consulta.pacient=this.paciente.id;
      this.consultaService.postConsulta(this.consulta).subscribe(
        res=>{
          console.log(res);
        },
        err=>console.log(err)
      )
    }
    //busca el paciente segun su id
    getBuscarPaciente(){
      this.pacienteService.getBuscarPacienteAPI(this.paciente.id).subscribe(
        res => {
          this.aux=res;
          console.log(res);
          console.log(this.aux);
        },
        err =>console.error(err)
  
      );
    }
}
