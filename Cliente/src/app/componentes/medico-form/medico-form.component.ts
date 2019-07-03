import { Component, OnInit, HostBinding } from '@angular/core';

import {MedicoService} from '../../servicios/medico.service';
import { medicos } from 'src/app/modelos/medicos';
import { Validators } from '@angular/forms';
import {EspecialidadService} from 'src/app/servicios/especialidad.service'

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {
  agregado = false;

  @HostBinding('class') classes = 'col-md-4 offset-md-4';
  especialidades:any=[];
  medico: medicos = {
    nombre: '',
    especialidad: null,
    edad: null,
    f_nacimiento: null,
    contratado: 1
  };
  constructor(private medicoservicio:MedicoService,
    private buscarEspecialidad:EspecialidadService) { }

  ngOnInit() { 
    this.buscarEspecialidad.getEspecialidades().subscribe(
      res=>{
        this.especialidades=res; 
        console.log(res);
        console.log(this.especialidades);
      },
      err =>console.error(err)
      
    )
  }
  guardarmedico() {
    this.agregado = true;
    this.medicoservicio.agregarmedico(this.medico).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
