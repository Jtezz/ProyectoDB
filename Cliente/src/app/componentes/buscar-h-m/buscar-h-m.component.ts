import { Component, OnInit } from '@angular/core';
import { Buscador} from 'src/app/modelos/buscador';
import {H_MgService} from '../../servicios/H_Mg.service';
@Component({
  selector: 'app-buscar-h-m',
  templateUrl: './buscar-h-m.component.html',
  styleUrls: ['./buscar-h-m.component.css']
})
export class BuscarHMComponent implements OnInit {
buscadora:Buscador ={
  ID: null

};
  constructor(private buscarHMservicio:H_MgService) { }

  ngOnInit() {
  }

  buscarHM() {
    this.buscarHMservicio.buscarH_M(this.buscadora.ID).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
