import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../../compo/card/card.component';
import { Product } from '../../data/product.interface';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-platos',
  imports: [CardComponent, CommonModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.scss'
})

  export class PlatosComponent implements OnInit {
  platos: Product[] = [];

  // Inyecta HomeComponent en el constructor
  constructor(private homeComponent: HomeComponent) { } // <--- ¡INYECTA!

  ngOnInit(): void {
    this.platos = [
      { id: 'p1', img: 'img/platos/plato-1.jpg', nombre: 'Paella', price: 15.50, category: 'platos' },
      { id: 'p2', img: 'img/platos/plato-2.jpg', nombre: 'Tortilla Española', price: 8.00, category: 'platos' },
      { id: 'p3', img: 'img/platos/plato-3.jpg', nombre: 'Guiso Manchego', price: 8.00, category: 'platos' },
    ];
  }

  handleAddToCarrito(productId: string): void {
    const productToAdd = this.platos.find(p => p.id === productId);
    if (productToAdd) {
      // Llama directamente al método del HomeComponent
      this.homeComponent.addProductToCarrito(productToAdd); // <--- ¡LLAMADA DIRECTA!
      console.log(`Producto ${productToAdd.nombre} añadido (llamado desde PlatosComponent)`);
    }
  }
}
