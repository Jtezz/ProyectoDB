import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Examen} from 'src/app/modelos/examen'

@Injectable({
  providedIn: 'root'
})
export class examenService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  agregarExamen(HM : Examen){
    return this.http.post(`${this.API_URI}/admin/guardar/examen`,HM);
  }
  getExamen(){//retorna todas las especialidades
    return this.http.get(`${this.API_URI}/examen`);//son backtick de jav `` alt+parentecis
  }
  
}