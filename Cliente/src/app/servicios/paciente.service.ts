import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//permite hacer peticiones http
import {paciente} from '../modelos/paciente';

//el servicio es la coneccion del fronted con la base de datos 
//con esto accedemos , recibimos y entregamos datos para guardar en la bd


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  API_URI = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getPaciente(){
    return this.http.get(`${this.API_URI}/paciente`);//son backtick de jav `` alt+parentecis
  }

  getBuscarPacienteAPI(id:string){//buscar paciente por rut
    return this.http.get(`${this.API_URI}/paciente/${id}`);//son backtick de jav `` alt+parentecis
  }

  postPaciente(paciente:paciente){//recibe un objeto paciente , su estructura esta en los modelos
    return this.http.post(`${this.API_URI}/paciente`,paciente);
  }

  /*metodo para actualizar , es diferente a los demas 
  updatePaciente(id:string,updatePaciente:paciente) :Obeservable<paciente>{ // recibe dos parametros //retorna un observable 
    return this.http.udpate(`${this.API_URI}/paciente/${id}`,updatePaciente);
  }
  */
}
