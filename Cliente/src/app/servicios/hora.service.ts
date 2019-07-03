import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Horas} from '../modelos/hora';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  agregarhora(Hora: Horas){
    return this.http.post(`${this.API_URI}/agregar/hora`,Hora);
  }
  getHora(){//retorna todas las especialidades
    return this.http.get(`${this.API_URI}/admin/hora`);//son backtick de jav `` alt+parentecis
  }

}
