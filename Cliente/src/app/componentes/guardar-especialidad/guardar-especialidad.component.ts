import { Component, OnInit } from '@angular/core';
import {EspecialidadService} from 'src/app/servicios/especialidad.service'
import {especialidad} from 'src/app/modelos/especialidad'
@Component({
  selector: 'app-guardar-especialidad',
  templateUrl: './guardar-especialidad.component.html',
  styleUrls: ['./guardar-especialidad.component.css']
})
export class GuardarEspecialidadComponent implements OnInit {
 medico:especialidad={
   Nombre:null
 };
 agregado=false;
  constructor(private especialidadServicio:EspecialidadService) { }

  ngOnInit() {
  }
  guardarespe() {
    this.agregado=true;
    this.especialidadServicio.agregarEspec(this.medico).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
