import { Component, OnInit } from '@angular/core';

import { hora_medicos } from 'src/app/modelos/hora_medico';
import { Buscador } from 'src/app/modelos/buscador';

import {H_MgService} from'src/app/servicios/H_Mg.service';
import {MedicoService} from 'src/app/servicios/medico.service';
import { ActualizarDispService } from 'src/app/servicios/actualizar-disp.service';


@Component({
  selector: 'app-actualizar-disp',
  templateUrl: './actualizar-disp.component.html',
  styleUrls: ['./actualizar-disp.component.css']
})
export class ActualizarDispComponent implements OnInit {

  disponibilidad=false;
  HoraMe:any=[];
  Buscador:Buscador={
    ID:null
  }
  horario_medi:hora_medicos = {
    ID_Med:null,
    ID_H:null,
    disponible:null
  }

  constructor(private actualizardispServicio:ActualizarDispService) { }

  ngOnInit() {
    this.actualizardispServicio.getdisponibilidad().subscribe(
      res=>{
        this.HoraMe=res;
        console.log(res)
        
      },
      err =>console.error(err)
    )
  }
  Nodisponible(){
    this.actualizardispServicio.updatedisponibilidad(this.Buscador.ID,this.horario_medi).subscribe(
      res=>{
        this.disponibilidad=true;
        console.log(res)        
      },
      err =>console.error(err)
    )
  }
}
