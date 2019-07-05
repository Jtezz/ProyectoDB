import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {consulta} from '../modelos/consulta';
import { buscadorP } from '../modelos/buscadorP';
import {cons_ex} from '../modelos/consulta_examen'

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
    return this.http.get(`${this.API_URI}/consulta`);
  }
  getConsultaId(id:buscadorP){
    return this.http.get(`${this.API_URI}/consulta/${id}`);
  }
  EliminarConsulta(id:number){
    return this.http.delete(`${this.API_URI}/consulta/${id}`);
  }
  getConsulta_id(id:number){
    return this.http.get(`${this.API_URI}/consulta_examen/mostrar/${id}`);
  }
  agregarConsulta_examen(cons_ex:cons_ex){
    return this.http.post(`${this.API_URI}/agregar/consulta_examen/`,cons_ex)
  }
  getHistorial(id:string){
    return this.http.get(`${this.API_URI}/admin/historial/${id}`);
  }
  getHistoriales(id:string){
    return this.http.get(`${this.API_URI}/admin/historiales/${id}`);
  }

}
