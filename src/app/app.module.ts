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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmpleadosComponent,
    AccesoComponent,
    DirectivaBotonDirective,
    EmpleadosResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
