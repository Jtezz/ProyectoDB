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
import { HoraComponent } from './componentes/hora/hora.component';
import { DespedirmedicoComponent } from './componentes/despedirmedico/despedirmedico.component';
import { BuscarmedHMComponent } from './componentes/buscarmed-h-m/buscarmed-h-m.component';
import { GuardarExamenComponent } from './componentes/guardar-examen/guardar-examen.component';
import { BuscarMedicoEspecComponent } from './componentes/buscar-medico-espec/buscar-medico-espec.component';
import { GuardarEspecialidadComponent } from './componentes/guardar-especialidad/guardar-especialidad.component';
import { GuardarIsapreComponent } from './componentes/guardar-isapre/guardar-isapre.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { BuscarExamenComponent } from './componentes/buscar-examen/buscar-examen.component';
import { BuscarHoraComponent } from './componentes/buscar-hora/buscar-hora.component';
import { NavegadorAdminComponent } from './componentes/navegador-admin/navegador-admin.component';
import { EditConsultaComponent } from './componentes/edit-consulta/edit-consulta.component';
import { ActualizarDispComponent } from './componentes/actualizar-disp/actualizar-disp.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { GuardarConsulExamenComponent } from './componentes/guardar-consul-examen/guardar-consul-examen.component';
import { SelecPacienteExamenComponent } from './componentes/selec-paciente-examen/selec-paciente-examen.component';
import { PacienteExamenComponent } from './componentes/paciente-examen/paciente-examen.component';


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
    HoraComponent,
    DespedirmedicoComponent,
    BuscarmedHMComponent,
    GuardarExamenComponent,
    BuscarMedicoEspecComponent,
    GuardarEspecialidadComponent,
    GuardarIsapreComponent,
    ConsultaComponent,
    BuscarExamenComponent,
    BuscarHoraComponent,
    NavegadorAdminComponent,
    ActualizarDispComponent,
    GuardarConsulExamenComponent,
    EditConsultaComponent,
    ActualizarDispComponent,
    HistorialComponent,
    SelecPacienteExamenComponent,
    PacienteExamenComponent,
    HistorialComponent,
    PacienteExamenComponent
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
