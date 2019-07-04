import { Component, OnInit } from '@angular/core';

import { DespedirService } from 'src/app/servicios/despedirmedico.service';
import { Buscador } from 'src/app/modelos/buscador';
import { medicos } from '../../modelos/medicos'
import {MedicoService} from 'src/app/servicios/medico.service'
@Component({
  selector: 'app-despedirmedico',
  templateUrl: './despedirmedico.component.html',
  styleUrls: ['./despedirmedico.component.css']
})
export class DespedirmedicoComponent implements OnInit {
  despedido= false;

  buscador:Buscador = {
    ID : null
  };
  medico: medicos = {
    nombre: '',
    especialidad: null,
    edad: null,
    f_nacimiento: null,
    contratado: null
  };
  medicos:any=[];

  constructor(private despedirservicio:DespedirService,
    private MedicosServicio:MedicoService) { }

  ngOnInit() {
    this.MedicosServicio.getmedicos().subscribe(
      res=>{
        this.medicos=res; 
        console.log(res);
        console.log(this.medicos);
      },
      err =>console.error(err)
      
    )
  }
  
  despedir(){
    this.despedido= true;
    this.despedirservicio.despedirmedico(this.buscador.ID,this.medico).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
