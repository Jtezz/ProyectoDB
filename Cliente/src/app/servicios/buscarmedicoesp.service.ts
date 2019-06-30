import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Buscador} from '../modelos/buscador';

@Injectable({
  providedIn: 'root'
})
export class BuscarmedicoServiceEsp {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  buscarmedicoesp(ID: number){
    return this.http.get(`${this.API_URI}/buscar/medicos/espec/${ID}`);
  }
}