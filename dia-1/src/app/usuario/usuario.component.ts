import { Component, Input} from '@angular/core';
//import { USUARIOS_FALSOS } from './usuarios-falsos';
// Selecciona (supuestamente) una foto de la carpeta de forma aleatoria
// const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length)

// Definimos las características del componente ('decorador')
@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

// Se define la clase y sus métodos
export class UsuarioComponent {
    @Input({required: true}) avatar!:String;
    @Input({required: true}) nombre!:String;
   
  get rutaImagen () {
    return 'assets/usuarios/' + this.avatar
  }

   alSeleccionarUsuario() {
  }
}


  //usuarioSeleccionado =signal(USUARIOS_FALSOS[indiceAleatorio]);
  //rutaImagen = computed(() =>'assets/usuarios/' + this.usuarioSeleccionado().avatar)

  /* getter
  get rutaImagen () {
    return 'assets/usuarios/' + this.usuarioSeleccionado().avatar
  }
*/

/*  
alSeleccionarUsuario () {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length)
    this.usuarioSeleccionado.set(USUARIOS_FALSOS[indiceAleatorio]);
   
  }
*/

