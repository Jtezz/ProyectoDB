import { Component, OnInit ,Input} from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
import{buscadorP}from '../../modelos/buscadorP';
import { paciente } from 'src/app/modelos/paciente';
@Component({
  selector: 'app-buscar-paciente',
  templateUrl: './buscar-paciente.component.html',
  styleUrls: ['./buscar-paciente.component.css']
})
export class BuscarPacienteComponent implements OnInit {
  public paciente:buscadorP={
    id:null
  };
  
  public aux:paciente={
    id:'',
    nombre: '',
    genero:'',
    isapre:null,
    f_nacimiento: null,
    email:'',
    telefono:''
  };
  public prueba:string='Informarcion de paciente';


  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
  }
  getBuscarPaciente(){
    this.pacienteService.getBuscarPacienteAPI(this.paciente.id).subscribe(
      res => {
        this.aux=res;
        console.log(res);
        console.log(this.aux)
      },
      err =>console.error(err)

    );
  }
  
}
