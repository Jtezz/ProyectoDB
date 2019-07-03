import { Component, OnInit } from '@angular/core';
import {HoraService} from 'src/app/servicios/hora.service'
@Component({
  selector: 'app-buscar-hora',
  templateUrl: './buscar-hora.component.html',
  styleUrls: ['./buscar-hora.component.css']
})
export class BuscarHoraComponent implements OnInit {

  constructor(private HoraServicio:HoraService) { }

  ngOnInit() {
  }
  buscar() {
    this.HoraServicio.getHora().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
