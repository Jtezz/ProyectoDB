import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';//este modulo permite definir rutas de la app 
// cada ruta es un objeto

import {MedicoFormComponent} from './componentes/medico-form/medico-form.component';
import {BuscarmedicosComponent} from './componentes/buscarmedicos/buscarmedicos.component';
import {BuscarPacienteComponent} from './componentes/buscar-paciente/buscar-paciente.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';//trae el component que utilizara la ruta
import {PacienteFormComponent} from './componentes/paciente-form/paciente-form.component';
import {SelectPacienteComponent} from './componentes/select-paciente/select-paciente.component';
import { HoraMedicogComponent } from './componentes/hora-medicog/hora-medicog.component'
import {BuscarHMComponent} from './componentes/buscar-h-m/buscar-h-m.component';
import {EspecialidadComponent}from './componentes/especialidad/especialidad.component';
import { HoraComponent } from './componentes/hora/hora.component';

const routes: Routes = [

  {
    path: 'medico/agregar',//parametro path es el nombre de la ruta
    // otras estiquetas
    //redirecTo: redirecciona a esta url o ruta
    //con esto se debe agregar
    //pathMach:full
    component: MedicoFormComponent
  },
  {
    path :'paciente/buscar',
    component: BuscarPacienteComponent
  },
  {
    path:'paciente',
    component: PacienteComponent
  },
  {
    path:'paciente/add',
    component: PacienteFormComponent
  },
  {
    path:'paso1',
    component: SelectPacienteComponent
  },
  {
    path:'especialidad',
    component:EspecialidadComponent
  },
  {
    path:"admin/g_h_m",
    component: HoraMedicogComponent
  },
  {
    path:"admin/b_h_m",
    component: BuscarHMComponent
  },
  {
    path : "admin/agregar/hora",
    component: HoraComponent
  },
  {
    path:"buscar/medicos",
    component: BuscarmedicosComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
