import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {consulta} from '../modelos/consulta';
import { buscadorP } from '../modelos/buscadorP';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  postConsulta(consulta:consulta){
    return this.http.post(`${this.API_URI}/agregar/consulta/`,consulta);
  }
  getConsulta(){
    return this.http.get(`${this.API_URI}/consulta`)
  }
  getConsultaId(id:buscadorP){
    return this.http.get(`${this.API_URI}/consulta/${id}`);
  }
  EliminarConsulta(id:number){
    return this.http.delete(`${this.API_URI}/consulta/${id}`);
  }

}
