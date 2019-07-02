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
import {DespedirmedicoComponent} from './componentes/despedirmedico/despedirmedico.component';
import { BuscarmedHMComponent } from './componentes/buscarmed-h-m/buscarmed-h-m.component';
import { GuardarExamenComponent } from './componentes/guardar-examen/guardar-examen.component';
import { BuscarMedicoEspecComponent } from './componentes/buscar-medico-espec/buscar-medico-espec.component';
import {GuardarEspecialidadComponent} from './componentes/guardar-especialidad/guardar-especialidad.component'
const routes: Routes = [

  {
    path: 'admin/medico/agregar',//parametro path es el nombre de la ruta
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
    path: "admin/medico/despedir",
    component: DespedirmedicoComponent
  },
  {
    path:"buscar/medicos",
    component: BuscarmedicosComponent
  },
  {
    path:"admin/bm_h_m",
    component: BuscarmedHMComponent
  },
  {
    path:"admin/guardar/examen",
    component: GuardarExamenComponent
  },
  {
    path:"buscar/medicos/espec",
    component:BuscarMedicoEspecComponent
  },
  {
    path:"admin/guardar/espec",
    component:GuardarEspecialidadComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
