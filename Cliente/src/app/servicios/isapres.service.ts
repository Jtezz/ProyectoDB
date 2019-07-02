import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isapre} from '../modelos/isapre';

@Injectable({
  providedIn: 'root'
})
export class IsapresService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getIsapres(){
    return this.http.get(`${this.API_URI}/isapre`);
  }
  agregarEspec(HM : isapre){
    return this.http.post(`${this.API_URI}/admin/guardar/isapre`,HM);
  }
}
