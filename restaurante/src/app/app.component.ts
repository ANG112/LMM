import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './data/product.interface';
import { NavComponent } from './compo/nav/nav.component';
import { HeaderComponent } from './compo/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Mi APP Restaurante';

  }

 