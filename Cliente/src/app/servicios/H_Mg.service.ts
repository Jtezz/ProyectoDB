import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {hora_medicos} from '../modelos/hora_medico';

@Injectable({
  providedIn: 'root'
})
export class H_MgService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  agregarH_M(HM : hora_medicos){
    return this.http.post(`${this.API_URI}/admin/g_h_m`,HM);
  }
  buscarH_M(HM : number){
    return this.http.get(`${this.API_URI}/admin/b_h_m/${HM}`);

  }
  buscarmedH_M(HM : number){
    return this.http.get(`${this.API_URI}/admin/bm_h_m/${HM}`);

  }
}