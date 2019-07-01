import { Component, OnInit } from '@angular/core';
import {Buscador} from 'src/app/modelos/buscador';
import {MedicoService} from 'src/app/servicios/medico.service'
@Component({
  selector: 'app-buscar-medico-espec',
  templateUrl: './buscar-medico-espec.component.html',
  styleUrls: ['./buscar-medico-espec.component.css']
})
export class BuscarMedicoEspecComponent implements OnInit {
  buscar : Buscador={
    ID:null
  };
  constructor(private Buscarmedicoservicio:MedicoService) { }

  ngOnInit() {
  }
  buscarmed() {
    this.Buscarmedicoservicio.buscarEspec(this.buscar.ID).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
