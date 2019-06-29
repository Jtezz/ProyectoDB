import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {medicos} from '../modelos/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getmedicos(){
    return this.http.get(`${this.API_URI}/medicos`);
  }
  agregarmedico(medico: medicos){
    return this.http.post(`${this.API_URI}/medico/contratar`,medico);
  }
  eliminarmedico(id:number){
    return this.http.put(`${this.API_URI}/medicos/despedir`,id);
  }
}
