import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';
registerLocaleData(localeMx);

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AccesoComponent } from './component/acceso/acceso.component';
import { RouterModule } from '@angular/router';
import { DirectivaBotonDirective } from './directives/directiva-boton.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';                   // FormsModule ==> ngModel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { EmpleadosCardsComponent } from './component/empleados/empleados-cards/empleados-cards.component';
import { DialogComponent } from './component/dialogs/dialog/dialog.component';
import { ErrorComponent } from './component/dialogs/error/error.component';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { EmpleadosComponent } from './component/empleados/empleados/empleados.component';
import { EmpleadosResultadoComponent } from './component/empleados/empleados-resultado/empleados-resultado.component';
import { EmpleadosListadoComponent } from './component/empleados/empleados-listado/empleados-listado.component';
import { EmpleadosMatListadoComponent } from './component/empleados/empleados-mat-listado/empleados-mat-listado.component';
import { EmpleadosSeleccionarComponent } from './component/empleados/empleados-seleccionar/empleados-seleccionar.component';
import { MenuEmpleadosComponent } from './component/empleados/menu-empleados/menu-empleados.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { BajaEstiloDirective } from './directives/baja-estilo.directive';
import { FiltroEmpleadosPipe } from './pipes/filtro-empleados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmpleadosComponent,
    AccesoComponent,
    DirectivaBotonDirective,
    EmpleadosResultadoComponent,
    EmpleadosSeleccionarComponent,
    MenuEmpleadosComponent,
    EmpleadosListadoComponent,
    EmpleadosMatListadoComponent,
    EmpleadosCardsComponent,
    DialogComponent,
    ErrorComponent,
    BooleanATextoPipe,
    FechaPipe,
    BajaEstiloDirective,
    FiltroEmpleadosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AppComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'acceso', component: AccesoComponent }
    ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }
