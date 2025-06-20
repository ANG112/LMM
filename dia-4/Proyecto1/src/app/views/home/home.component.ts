import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // se importa aquí el routerOutlet

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive], //Se importa quí y no olvidar poner la etiqueta <router-oulet/> en el HTML home.componente.html
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
