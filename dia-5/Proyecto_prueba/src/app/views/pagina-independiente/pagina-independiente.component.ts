import { Component } from '@angular/core';
import { HeaderComponent } from '../../object/header/header.component';
import { NavComponent } from '../../object/nav/nav.component';
import { MainComponent } from '../../object/main/main.component';

@Component({
  selector: 'app-pagina-independiente',
  imports: [HeaderComponent, NavComponent, MainComponent],
  templateUrl: './pagina-independiente.component.html',
  styleUrl: './pagina-independiente.component.css'
})

export class PaginaIndependienteComponent {

}
