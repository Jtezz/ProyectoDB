import { Component, OnInit } from '@angular/core';
import {buscadorP} from 'src/app/modelos/buscadorP';
import {ConsultaService} from 'src/app/servicios/consulta.service';
import {ActualizarDispService} from 'src/app/servicios/actualizar-disp.service'
import {up} from 'src/app/modelos/model'

@Component({
  selector: 'app-update-diagnostico',
  templateUrl: './update-diagnostico.component.html',
  styleUrls: ['./update-diagnostico.component.css']
})
export class UpdateDiagnosticoComponent implements OnInit {
  buscador:buscadorP={
    id:""
  };
  aux:any=[];
  salvador:up={
    algo:"",
    ID:null
  };

  constructor(private pacienteServicio:ConsultaService,
    private upService:ActualizarDispService) { }

  ngOnInit() {
  }
  Buscar(){
    this.pacienteServicio.getHistoriales(this.buscador.id).subscribe(
      res=>{
        this.aux=res;
        console.log(res);
        
      },
      err =>console.error(err)
    )
  }
  update(){
    this.upService.Diagnostico(this.salvador).subscribe(
      res=>{
        console.log(res)
        
      },
      err =>console.error(err)
    )
  }

}
