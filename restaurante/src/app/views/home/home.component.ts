import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../compo/nav/nav.component';
import { HeaderComponent } from '../../compo/header/header.component';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
