import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DepartamentosInicioComponent } from './component/departamentos/departamentos-inicio/departamentos-inicio.component';
import { EmpleadosRxjsInicioComponent } from './component/empleados-rxjs/empleados-rxjs-inicio/empleados-rxjs-inicio.component';
import { EmpleadosInicioComponent } from './component/empleados/empleados-inicio/empleados-inicio.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './component/pagina-no-encontrada/pagina-no-encontrada.component';
import { UsuariosInicioComponent } from './component/usuarios/usuarios-inicio/usuarios-inicio.component';

const rutas: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'empleados-rxjs', component: EmpleadosRxjsInicioComponent },
  { path: 'empleados', component: EmpleadosInicioComponent },
  { path: 'departamentos', component: DepartamentosInicioComponent },
  { path: 'usuarios', component: UsuariosInicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
