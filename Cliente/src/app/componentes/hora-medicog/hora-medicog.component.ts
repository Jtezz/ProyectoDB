import { Component, OnInit, HostBinding } from '@angular/core';
import { hora_medicos} from 'src/app/modelos/hora_medico';
import {H_MgService} from '../../servicios/H_Mg.service';
import {MedicoService} from 'src/app/servicios/medico.service'
import {HoraService} from 'src/app/servicios/hora.service'
@Component({
  selector: 'app-hora-medicog',
  templateUrl: './hora-medicog.component.html',
  styleUrls: ['./hora-medicog.component.css']
})
export class HoraMedicogComponent implements OnInit {
  @HostBinding('class') classes = 'col-md-4 offset-md-4';
  agregado=false;
  horam : hora_medicos ={
    ID_Med: null,
    ID_H: null,
    disponible: 1
  };
  medicos:any=[];
  horas:any=[];

  constructor(private H_Mgservicio:H_MgService,
    private MedicoServicio:MedicoService,
    private HoraServicio:HoraService) { }

  ngOnInit() {
    this.MedicoServicio.getmedicos().subscribe(
      res=>{
        this.medicos=res; 
        console.log(res);
        console.log(this.medicos);
      },
      err =>console.error(err)
      
    )
    this.HoraServicio.getHora().subscribe(
      res=>{
        this.horas=res; 
        console.log(res);
        console.log(this.horas);
      },
      err =>console.error(err)
      
    )
  }
  guardarH_M() {
    this.agregado=true;
    this.H_Mgservicio.agregarH_M(this.horam).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
