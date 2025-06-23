import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../compo/card/card.component';
import { Product } from '../../data/product.interface';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';

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
      { id: 'p1', img: 'assets/images/platos/paella.jpg', nombre: 'Paella', price: 15.50 },
      { id: 'p2', img: 'assets/images/platos/tortilla.jpg', nombre: 'Tortilla Española', price: 8.00 },
      // ... más platos
    ];
  }

  handleAddToCarrito(productId: string): void {
    console.log(`Plato ${productId} añadido al carrito`);
  }
}


