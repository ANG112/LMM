import { Component, computed, Input } from '@angular/core';

interface Usuario {
  id: string;
  nombre: string;
  avatar: string
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input({ required: true }) usuario!: Usuario; // Importante!!!!!!!

  rutaImagen = computed(() => {
    return 'public/usuarios/' + this.usuario.avatar;
  });

  mostrarUsuario() {
    console.log(this.usuario);
  }
    }
   
  

  


