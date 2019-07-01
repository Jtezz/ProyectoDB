import { Component, OnInit } from '@angular/core';

import {Horas} from 'src/app/modelos/hora';
import { HoraService } from '../../servicios/hora.service';


@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {
  Horaagregada = false;
  
  Hora: Horas = {
    Bloque: ' ',
    Fecha: null
  }

  constructor(private Horaservicio: HoraService) { }

  ngOnInit() {
  }

  guardarhora() {
    this.Horaagregada = true;
    this.Horaservicio.agregarhora(this.Hora).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
