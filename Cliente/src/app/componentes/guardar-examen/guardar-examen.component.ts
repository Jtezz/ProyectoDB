import { Component, OnInit } from '@angular/core';
import {Examen} from 'src/app/modelos/examen'
import {examenService} from 'src/app/servicios/examen.service'
@Component({
  selector: 'app-guardar-examen',
  templateUrl: './guardar-examen.component.html',
  styleUrls: ['./guardar-examen.component.css']
})
export class GuardarExamenComponent implements OnInit {

  descripcion :Examen={
    des:null
  };
  constructor(private GuardarExamenServicio:examenService) { }

  ngOnInit() {
  }
  guardar() {
    this.GuardarExamenServicio.agregarExamen(this.descripcion).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
