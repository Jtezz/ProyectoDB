import { Component, OnInit } from '@angular/core';
import { Buscador} from 'src/app/modelos/buscador';
import {H_MgService} from '../../servicios/H_Mg.service';
@Component({
  selector: 'app-buscarmed-h-m',
  templateUrl: './buscarmed-h-m.component.html',
  styleUrls: ['./buscarmed-h-m.component.css']
})
export class BuscarmedHMComponent implements OnInit {
buscador:Buscador={
  ID:null
};
  constructor(private buscarmedHMservicio:H_MgService) { }

  ngOnInit() {
  }
  buscarmedHM() {
    this.buscarmedHMservicio.buscarmedH_M(this.buscador.ID).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}

