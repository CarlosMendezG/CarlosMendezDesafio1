import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';
registerLocaleData(localeMx);

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AccesoComponent } from './component/acceso/acceso.component';
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
import { InicioComponent } from './component/inicio/inicio.component';
import { EmpleadosInicioComponent } from './component/empleados/empleados-inicio/empleados-inicio.component';
import { UsuariosInicioComponent } from './component/usuarios/usuarios-inicio/usuarios-inicio.component';
import { DepartamentosInicioComponent } from './component/departamentos/departamentos-inicio/departamentos-inicio.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { UsuariosComponent } from './component/usuarios/usuarios/usuarios.component';
import { DepartamentosComponent } from './component/departamentos/departamentos/departamentos.component';
import { LoginComponent } from './component/login/login.component';
import { PaginaNoEncontradaComponent } from './component/pagina-no-encontrada/pagina-no-encontrada.component';
import { EmpleadosRxjsComponent } from './component/empleados-rxjs/empleados-rxjs/empleados-rxjs.component';
import { EmpleadosRxjsCardsComponent } from './component/empleados-rxjs/empleados-rxjs-cards/empleados-rxjs-cards.component';
import { EmpleadosRxjsMenuComponent } from './component/empleados-rxjs/empleados-rxjs-menu/empleados-rxjs-menu.component';
import { EmpleadosRxjsInicioComponent } from './component/empleados-rxjs/empleados-rxjs-inicio/empleados-rxjs-inicio.component';
import { EmpleadosRxjsListadoComponent } from './component/empleados-rxjs/empleados-rxjs-listado/empleados-rxjs-listado.component';

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
    FiltroEmpleadosPipe,
    InicioComponent,
    EmpleadosInicioComponent,
    UsuariosInicioComponent,
    DepartamentosInicioComponent,
    ToolbarComponent,
    UsuariosComponent,
    DepartamentosComponent,
    LoginComponent,
    PaginaNoEncontradaComponent,
    EmpleadosRxjsComponent,
    EmpleadosRxjsCardsComponent,
    EmpleadosRxjsMenuComponent,
    EmpleadosRxjsInicioComponent,
    EmpleadosRxjsListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }
