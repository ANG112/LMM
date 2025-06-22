import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './compo/encabezado/encabezado.component';
import { CardComponent } from './compo/card/card.component';
import { USUARIOS_FALSOS } from './compo/card/usuarios-falsos';
import { CommonModule } from '@angular/common';
import { QuizComponent } from "./views/quiz/quiz.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, CardComponent, CommonModule, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;

 

}
