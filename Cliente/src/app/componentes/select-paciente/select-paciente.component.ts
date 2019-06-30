import { Component, OnInit } from '@angular/core';

import{ PacienteService} from '../../servicios/paciente.service';
import { paciente } from 'src/app/modelos/paciente';

@Component({
  selector: 'app-select-paciente',
  templateUrl: './select-paciente.component.html',
  styleUrls: ['./select-paciente.component.css']
})
export class SelectPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
