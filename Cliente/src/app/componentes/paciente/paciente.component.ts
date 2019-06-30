import { Component, OnInit } from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
//primero creamos el componente de paciente 
//que contendra las propiedades de paciente , su html , css 
//y la logica para insertar en la base de datos 

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  pacientes: any=[];
  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.getPaciente().subscribe(
      res => {
        this.pacientes=res;
        console.log(res)
      },
      err =>console.error(err)

    );
  }

}
