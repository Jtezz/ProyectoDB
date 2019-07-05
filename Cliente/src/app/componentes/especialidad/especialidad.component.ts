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

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {
  //Variables globales
  public paciente:buscadorP={
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
  aux2:boolean=false;//muestra la buscqueda de las horas
  aux3:boolean=true;//mostrar buscador de paciente
  aux4:boolean=false;
  consulta:consulta={
    MH:null,
    pacient:'',
    Tipo:1,
  };

  constructor(private especialidadesService:EspecialidadService,
    private medicoService:MedicoService,
    private buscarHorarioMedicoService:H_MgService,
    private consultaService:ConsultaService,
    private pacienteService: PacienteService) { }

  ngOnInit() {//paso 1 , carga todas las especialidades al arreglo especialidades
    this.especialidadesService.getEspecialidades().subscribe(
      res=>{
        this.especialidades=res;
        
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
          console.log(this.medicos);
        },
        err => console.log(err)
      )
    }
    //paso 3 busca el horario del medico 
    //arreglar , tenemos un problema con la consulta de las horas y como las devuelve 01-07-2019
    
    escojerMedico(){
      this.aux2=true;
      this.buscarHorarioMedicoService.Buscar_Horario_Medico(this.buscador2.ID).subscribe(//guarda en buscador2.Id el id del medico
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
          console.log(this.buscador3);
          console.log(this.consulta);
          console.log(res);
        },
        err=>console.log(err)
      )
    }
    //busca el paciente segun su id
    prueba1(){
      console.log(this.buscador2.ID);
    }
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
