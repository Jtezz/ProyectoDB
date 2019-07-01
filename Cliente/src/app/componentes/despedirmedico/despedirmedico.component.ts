import { Component, OnInit } from '@angular/core';

import { DespedirService } from 'src/app/servicios/despedirmedico.service';
import { Buscador } from 'src/app/modelos/buscador';
import { medicos } from '../../modelos/medicos'
@Component({
  selector: 'app-despedirmedico',
  templateUrl: './despedirmedico.component.html',
  styleUrls: ['./despedirmedico.component.css']
})
export class DespedirmedicoComponent implements OnInit {

  buscador:Buscador = {
    ID : null
  };
  medico: medicos = {
    nombre: '',
    especialidad: null,
    edad: null,
    f_nacimiento: null,
    contratado: null
  };

  constructor(private despedirservicio:DespedirService) { }

  ngOnInit() {
  }
  
  despedir(){
    this.despedirservicio.despedirmedico(this.buscador.ID,this.medico).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
