import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicoFormComponent} from './componentes/medico-form/medico-form.component';
import {BuscarmedicosComponent} from './componentes/buscarmedicos/buscarmedicos.component';
import { HoraMedicogComponent } from './componentes/hora-medicog/hora-medicog.component'
import {BuscarmedicosComponentEsp} from './componentes/buscarmedicoesp/buscarmedicoesp.component';
import {BuscarHMComponent} from './componentes/buscar-h-m/buscar-h-m.component';
import { from } from 'rxjs';
const routes: Routes = [

  {
    path: "medico/agregar",
    component: MedicoFormComponent
  },
  {
    path :"buscar/medicos",
    component: BuscarmedicosComponent
  },
  {
    path :"buscar/medicos/espec",
    component: BuscarmedicosComponentEsp
  },
  {
    path:"admin/g_h_m",
    component: HoraMedicogComponent
  },
  {
    path:"admin/b_h_m",
    component: BuscarHMComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
