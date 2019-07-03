import { Component, OnInit } from '@angular/core';
import {isapre}from 'src/app/modelos/isapre';
import{ IsapresService} from 'src/app/servicios/isapres.service';
@Component({
  selector: 'app-guardar-isapre',
  templateUrl: './guardar-isapre.component.html',
  styleUrls: ['./guardar-isapre.component.css']
})
export class GuardarIsapreComponent implements OnInit {
isap :isapre={
des:null
};
agregado=false;
  constructor(private GuardarIsapreServicio:IsapresService) { }

  ngOnInit() {
  }
  guardar() {
    this.agregado=true;
    this.GuardarIsapreServicio.agregarEspec(this.isap).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    
  }

}
