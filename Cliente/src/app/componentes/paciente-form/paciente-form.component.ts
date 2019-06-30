import { Component, OnInit, HostBinding } from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
import { paciente } from 'src/app/modelos/paciente';

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
    edad: null,
    isapre:null,
    f_nacimiento: null

  };
  constructor(private pacienteService:PacienteService) { }

  ngOnInit() {
  }
  addPaciente(){
    this.pacienteService.postPaciente(this.paciente).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
  }
}
