import { Component, OnInit, HostBinding } from '@angular/core';
import { BuscarmedicoServiceEsp } from 'src/app/servicios/buscarmedicoesp.service';
import { Buscador } from 'src/app/modelos/buscador';

@Component({
  selector: 'app-buscarmedicoesp',
  templateUrl: './buscarmedicoesp.component.html',
  styleUrls: ['./buscarmedicoesp.component.css']
})
export class BuscarmedicosComponentEsp implements OnInit {

  buscador:Buscador = {
    ID : null
  };

  constructor(private buscadorservicio:BuscarmedicoServiceEsp) { }
  
  ngOnInit() {
  }

  buscarEsp() {
    this.buscadorservicio.buscarmedicoesp(this.buscador.ID).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}