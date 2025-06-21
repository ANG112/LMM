import { Component } from '@angular/core';
import { NavComponent } from '../../object/nav/nav.component';
import { MainComponent } from '../../object/main/main.component';
import { HeaderComponent } from '../../object/header/header.component';

@Component({
  selector: 'app-aside-izquierda',
  imports: [NavComponent, MainComponent, HeaderComponent],
  templateUrl: './aside-izquierda.component.html',
  styleUrl: './aside-izquierda.component.css'
})
export class AsideIzquierdaComponent {

}
