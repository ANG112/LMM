import { Component } from '@angular/core';

import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { UsuarioComponent } from "./usuario/usuario.component";

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dia_1';
}
