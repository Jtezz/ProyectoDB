import { Component, OnInit, Input } from '@angular/core';




//componenetes
import {PacienteFormComponent} from '../paciente-form/paciente-form.component';// intentar traer el paciente
import {BuscarPacienteComponent}from '../buscar-paciente/buscar-paciente.component';
//modelos
import { buscadorP } from 'src/app/modelos/buscadorP';
import {Buscador} from 'src/app/modelos/buscador';
import{Medico}from '../../modelos/Medico';
import {especialidad} from '../../modelos/especialidad';
//servicios utilizacods
import{ PacienteService} from '../../servicios/paciente.service';
import {H_MgService} from'src/app/servicios/H_Mg.service';
import {MedicoService} from 'src/app/servicios/medico.service';
import{EspecialidadService} from '../../servicios/especialidad.service';
import{ConsultaService}from'../../servicios/consulta.service';
import { consulta } from 'src/app/modelos/consulta';
import { paciente } from 'src/app/modelos/paciente';
import {examenService} from 'src/app/servicios/examen.service'
import {cons_ex} from 'src/app/modelos/consulta_examen'

@Component({
  selector: 'app-guardar-consul-examen',
  templateUrl: './guardar-consul-examen.component.html',
  styleUrls: ['./guardar-consul-examen.component.css']
})
export class GuardarConsulExamenComponent implements OnInit {

  public paciente:buscadorP={
    id:null
  };
  salvador:cons_ex={
    ID_ex:null,
    ID_c:null
  };
  consul:any=[];
  Examenes:any=[]; 
  public aux:any;
  aux6=false;
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
  aux2:boolean=false;//muestra la buscqueda de las horas
  aux3:boolean=true;//mostrar buscador de paciente
  aux4:boolean=false;
  aux5:boolean=false;
  consulta:consulta={
    MH:null,
    pacient:'',
    Tipo:2,
  };
  Buscador5:Buscador={
    ID:null
  };

  constructor(private especialidadesService:EspecialidadService,
    private medicoService:MedicoService,
    private buscarHorarioMedicoService:H_MgService,
    private consultaService:ConsultaService,
    private pacienteService: PacienteService,
    private ExamenService:examenService) { }

  ngOnInit() {//paso 1 , carga todas las especialidades al arreglo especialidades
    this.especialidadesService.getEspecialidades().subscribe(
      res=>{
        this.especialidades=res;
        
      },
      err =>console.error(err)
      
    )
    this.ExamenService.getExamen().subscribe(
      res=>{
        this.Examenes=res; 
        console.log(res);
        console.log(this.Examenes);
      },
      err =>console.error(err)
      
    )
  }
  paso2(){
    this.aux3=false;
    this.aux4=true;
  }
  //paso 2 busca el medico segun su especialidad
    buscarmedicoEspecialidad() {
      this.medicoService.buscarEspec(this.buscador.ID).subscribe(//guarda en buscador.Id el Id de la especialidad
        res => {
          this.medicos=res;
          console.log(this.paciente)

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
      this.aux6=true;
      this.consulta.MH=this.buscador3.ID;
      this.consulta.pacient=this.paciente.id;
      this.consultaService.postConsulta(this.consulta).subscribe(
        res=>{
          console.log(res);
        },
        err=>console.log(err)
      )
    }
    buscarConsulta(){
      this.aux5=true;
      this.consultaService.getConsulta_id(this.buscador3.ID).subscribe(
        res=>{
          this.consul=res;
        },
        err=>console.log(err)
      )
    }
    agregarConsulta(){
      this.consultaService.agregarConsulta_examen(this.salvador).subscribe(
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
