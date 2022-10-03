import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { EmpleadosComponent } from './component/empleados/empleados.component';
import { AccesoComponent } from './component/acceso/acceso.component';
import { RouterModule } from '@angular/router';
import { DirectivaBotonDirective } from './Directivas/directiva-boton.directive';
import { EmpleadosResultadoComponent } from './component/empleados-resultado/empleados-resultado.component';
import { EmpleadosSeleccionarComponent } from './component/empleados-seleccionar/empleados-seleccionar.component';
import { MenuEmpleadosComponent } from './component/menu-empleados/menu-empleados.component';
import { EmpleadosListadoComponent } from './component/empleados-listado/empleados-listado.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    EmpleadosListadoComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }
