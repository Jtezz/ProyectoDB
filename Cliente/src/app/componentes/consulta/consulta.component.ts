import { Component, OnInit, Input } from '@angular/core';
import { paciente } from 'src/app/modelos/paciente';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  @Input('id') idPaciente:any;

  constructor() { }

  ngOnInit() {
    console.log(this.idPaciente);
  }

}
