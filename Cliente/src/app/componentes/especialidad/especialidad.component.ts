import { Component, OnInit } from '@angular/core';
import{EspecialidadService} from '../../servicios/especialidad.service';
import {especialidad} from '../../modelos/especialidad'
import {}from '../buscarmedicos/buscarmedicos.component'// agregar el enlace para utilizar este componente
@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {
  especialidades:any=[];
  especialidadAux:any=[];
  constructor(private especialidadesService:EspecialidadService) { }

  ngOnInit() {
    this.especialidadesService.getEspecialidades().subscribe(
      res=>{
        this.especialidades=res; 
        console.log(res);
        console.log(this.especialidades);
      },
      err =>console.error(err)
      
    );
  }
  //crear una funcion que traiga las distintas especialidades desde la bd
    
  
  /*getBuscarPaciente(){
    this.pacienteService.getBuscarPacienteAPI(this.paciente.id).subscribe(
      res => {
        this.aux=res;
        console.log(res);
        console.log(this.aux)
      },
      err =>console.error(err)

    );
  }*/
  
}
