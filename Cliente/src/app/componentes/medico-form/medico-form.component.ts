import { Component, OnInit, HostBinding } from '@angular/core';

import {MedicoService} from '../../servicios/medico.service';
import { medicos } from 'src/app/modelos/medicos';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {

  @HostBinding('class') classes = 'col-md-4 offset-md-4';

  medico: medicos = {
    nombre: '',
    especialidad: null,
    edad: null,
    f_nacimiento: null,
    contratado: null
  };
  constructor(private medicoservicio:MedicoService) { }

  ngOnInit() { 

  }

  guardarmedico() {
    this.medicoservicio.agregarmedico(this.medico).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
