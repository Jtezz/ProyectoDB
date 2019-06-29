import { Component, OnInit } from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
import{buscadorP}from '../../modelos/buscadorP';
@Component({
  selector: 'app-buscar-paciente',
  templateUrl: './buscar-paciente.component.html',
  styleUrls: ['./buscar-paciente.component.css']
})
export class BuscarPacienteComponent implements OnInit {
  paciente:buscadorP={
    id:null
  };
  
  aux:any=[];
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
