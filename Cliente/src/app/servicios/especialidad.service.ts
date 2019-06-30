import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//modelo
import {especialidad} from '../modelos/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getEspecialidades(){//retorna todas las especialidades
    return this.http.get(`${this.API_URI}/especialidades`);//son backtick de jav `` alt+parentecis
  }
}
