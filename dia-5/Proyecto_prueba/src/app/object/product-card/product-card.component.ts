import { Component, Input } from '@angular/core';
import { ProductRestaurante } from '../../models/product-model';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() producto!: ProductRestaurante;

}
