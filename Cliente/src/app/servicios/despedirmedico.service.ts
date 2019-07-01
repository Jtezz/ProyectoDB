import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { medicos } from '../modelos/medicos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DespedirService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  despedirmedico(id:number, despedirmedico:medicos): Observable<any>{
    return this.http.put(`${this.API_URI}/medicos/despedir/${id}`,despedirmedico);
  }

}
