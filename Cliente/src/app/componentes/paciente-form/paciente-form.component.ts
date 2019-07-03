import { Component, OnInit, HostBinding } from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
import { paciente } from 'src/app/modelos/paciente';
import {isapre}from 'src/app/modelos/isapre';
import{ IsapresService} from 'src/app/servicios/isapres.service';

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
    tel: null,
    isapre:null,
    f_nacimiento: null,
    Email:null

  };
  isapres:any=[];

  constructor(private pacienteService:PacienteService,
              private isapreService:IsapresService) { }

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
}
