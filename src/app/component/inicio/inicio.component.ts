import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private usuarioServicio: UsuariosService
  ) { }

  public usuario!: Usuarios;

  ngOnInit(): void {
    this.usuario = {
      id: 1,
      nombre: "Carlos Méndez",
      esAdmin: true,
      logIn: new Date()
    };

  }

}
