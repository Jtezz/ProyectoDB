import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';//trabajar con formularios en angular
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { MedicoFormComponent } from './componentes/medico-form/medico-form.component';
import { BuscarmedicosComponent } from './componentes/buscarmedicos/buscarmedicos.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PacienteFormComponent } from './componentes/paciente-form/paciente-form.component';
//servicios
import {PacienteService} from './servicios/paciente.service';
import {MedicoService} from './servicios/medico.service';
import { from } from 'rxjs';
import { SelectPacienteComponent } from './componentes/select-paciente/select-paciente.component';
import { BuscarPacienteComponent } from './componentes/buscar-paciente/buscar-paciente.component';
import { EspecialidadComponent } from './componentes/especialidad/especialidad.component';
import { HoraMedicogComponent } from './componentes/hora-medicog/hora-medicog.component';
import{H_MgService} from './servicios/H_Mg.service';
import { BuscarHMComponent } from './componentes/buscar-h-m/buscar-h-m.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    MedicoFormComponent,
    BuscarmedicosComponent,
    PacienteComponent,
    PacienteFormComponent,
    SelectPacienteComponent,
    BuscarPacienteComponent,
    EspecialidadComponent,
    HoraMedicogComponent,
    BuscarHMComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//para utilizar protocolo http
    FormsModule
  ],
  providers: [
    MedicoService,
    H_MgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
