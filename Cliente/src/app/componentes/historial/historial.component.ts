import { Component, OnInit } from '@angular/core';

import { buscadorP } from '../../modelos/buscadorP'

import { ConsultaService } from '../../servicios/consulta.service';
import { PacienteService } from '../../servicios/paciente.service';

@Component({
 selector: 'app-historial',
 templateUrl: './historial.component.html',
 styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

 histo= false;

 ID:buscadorP = {
   id:''
 }
 historial:any = [];

 constructor(private consultaservicio:ConsultaService,
   private pacienteservicio:PacienteService) { }

 ngOnInit() {
 }
 gethistorial(){
   this.consultaservicio.getHistorial(this.ID.id).subscribe(
     res => {
       this.histo=true;
       this.historial =res;
       console.log(res);
     },
     err => console.log(err)
   )
 }

}
