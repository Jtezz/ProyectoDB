import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/servicios/consulta.service';

@Component({
  selector: 'app-edit-consulta',
  templateUrl: './edit-consulta.component.html',
  styleUrls: ['./edit-consulta.component.css']
})
export class EditConsultaComponent implements OnInit {
  id:number=null;
  constructor(private consultaService:ConsultaService) { }
  ngOnInit() {
  }
  EliminarConsulta(){
    this.consultaService.EliminarConsulta(this.id).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }
  print(){
    console.log(this.id)
  }
}
