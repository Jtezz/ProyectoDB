import { Component, OnInit, HostBinding } from '@angular/core';
import { hora_medicos} from 'src/app/modelos/hora_medico';
import {H_MgService} from '../../servicios/H_Mg.service';
@Component({
  selector: 'app-hora-medicog',
  templateUrl: './hora-medicog.component.html',
  styleUrls: ['./hora-medicog.component.css']
})
export class HoraMedicogComponent implements OnInit {
  @HostBinding('class') classes = 'col-md-4 offset-md-4';
  horam : hora_medicos ={
    ID_Med: null,
    ID_H: null,
    Disponible: null
  };

  constructor(private H_Mgservicio:H_MgService) { }

  ngOnInit() {
  }
  guardarH_M() {
    this.H_Mgservicio.agregarH_M(this.horam).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
