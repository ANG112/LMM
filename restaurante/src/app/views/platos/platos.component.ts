import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../compo/card/card.component';
import { Product } from '../../data/product.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-platos',
  imports: [CardComponent, CommonModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.scss'
})
export class PlatosComponent implements OnInit {
  platos: Product[] = [];

  ngOnInit(): void { 
    this.platos = [
      { id: 'p1', img: 'img/platos/plato-1.jpg', nombre: 'Paella', price: 15.50 },
      { id: 'p2', img: 'img/platos/plato-2.jpg', nombre: 'Tortilla Española', price: 8.00 },
      { id: 'p3', img: 'img/platos/plato-3.jpg', nombre: 'Guiso Manchego', price: 8.00 },
      // ... más platos
    ];
  }

  handleAddToCarrito(productId: string): void {
    console.log(`Plato ${productId} añadido al carrito`);
  }
}


