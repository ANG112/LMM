import { Component } from '@angular/core';
import { NavComponent } from '../../object/nav/nav.component';
import { MainComponent } from '../../object/main/main.component';
import { HeaderComponent } from '../../object/header/header.component';


@Component({
  selector: 'app-aside-derecha',
  imports: [NavComponent, MainComponent, HeaderComponent],
  templateUrl: './aside-derecha.component.html',
  styleUrl: './aside-derecha.component.css'
})
export class AsideDerechaComponent {

}
