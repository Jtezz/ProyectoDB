import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Buscador} from '../modelos/buscador';

@Injectable({
  providedIn: 'root'
})
export class BuscarmedicoService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  buscarmedico(id: string){
    return this.http.get(`${this.API_URI}/buscar/medicos/${id}`);
  }
}
