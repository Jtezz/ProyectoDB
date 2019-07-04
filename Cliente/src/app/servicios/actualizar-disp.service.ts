import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { hora_medicos } from '../modelos/hora_medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarDispService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getdisponibilidad(){
    return this.http.get(`${this.API_URI}/HorarioMedico`);
  }
  updatedisponibilidad(ID:number, updatedisponibilidad:hora_medicos): Observable<any>{
    return this.http.put(`${this.API_URI}/admin/cambiardisp/${ID}`,updatedisponibilidad);
  }
}
