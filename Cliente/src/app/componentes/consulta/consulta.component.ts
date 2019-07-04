import { Component, OnInit, Input } from '@angular/core';
import { paciente } from 'src/app/modelos/paciente';
import{ConsultaService} from 'src/app/servicios/consulta.service';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public aux:any;
  constructor(private consultaService:ConsultaService) { }
  //a penar inicia retorna los datos de la consulta , de los cuales debemos acceder a los datos del paciente y de la hora para mostrar en el cliente
  ngOnInit() {
    this.consultaService.getConsulta().subscribe(
      res=>{
        this.aux=res;
        console.log(this.aux);
      },
      err =>console.error(err)
    )

  };

}
