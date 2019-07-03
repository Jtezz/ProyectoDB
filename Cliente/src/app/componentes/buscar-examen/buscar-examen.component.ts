import { Component, OnInit } from '@angular/core';
import {examenService} from 'src/app/servicios/examen.service'
@Component({
  selector: 'app-buscar-examen',
  templateUrl: './buscar-examen.component.html',
  styleUrls: ['./buscar-examen.component.css']
})
export class BuscarExamenComponent implements OnInit {

  constructor(private BuscarExamenServicio:examenService) { }

  ngOnInit() {
  }
  buscar() {
    this.BuscarExamenServicio.getExamen().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
