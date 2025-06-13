import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './usuarios-falsos';
// Selecciona (supuestamente) una foto de la 
const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length)

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

export class UsuarioComponent {
  usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio]

  get rutaImagen () {
    return 'public/usuarios' + this.usuarioSeleccionado.avatar
  }

  alSeleccionarUsuario () {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length)
    this.usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio]
  }
}
