import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { MedicoFormComponent } from './componentes/medico-form/medico-form.component';

import {MedicoService} from './servicios/medico.service';
import { from } from 'rxjs';
import { BuscarmedicosComponent } from './componentes/buscarmedicos/buscarmedicos.component';
import { BuscarmedicosComponentEsp } from './componentes/buscarmedicoesp/buscarmedicoesp.component';
import { HoraMedicogComponent } from './componentes/hora-medicog/hora-medicog.component';
import{H_MgService} from './servicios/H_Mg.service';
import { BuscarHMComponent } from './componentes/buscar-h-m/buscar-h-m.component'

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    MedicoFormComponent,
    BuscarmedicosComponent,
    BuscarmedicosComponentEsp,
    HoraMedicogComponent,
    BuscarHMComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MedicoService,
    H_MgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
