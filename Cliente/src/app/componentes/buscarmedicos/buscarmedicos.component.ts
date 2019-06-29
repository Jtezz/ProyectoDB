import { Component, OnInit, HostBinding } from '@angular/core';
import { BuscarmedicoService } from 'src/app/servicios/buscarmedico.service';
import { Buscador } from 'src/app/modelos/buscador';

@Component({
  selector: 'app-buscarmedicos',
  templateUrl: './buscarmedicos.component.html',
  styleUrls: ['./buscarmedicos.component.css']
})
export class BuscarmedicosComponent implements OnInit {

  buscador:Buscador = {
    ID : null
  }

  constructor(private buscadorservicio:BuscarmedicoService) { }

  ngOnInit() {
  }
/*
  getBuscar() {
    this.buscadorservicio.buscarmedico(this.buscador).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
*/
}
