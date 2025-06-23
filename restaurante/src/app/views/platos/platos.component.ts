import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() addProduct = new EventEmitter<Product>();

  ngOnInit(): void { 
    this.platos = [
      { id: 'p1', img: 'img/platos/plato-1.jpg', nombre: 'Paella', price: 15.50 },
      { id: 'p2', img: 'img/platos/plato-2.jpg', nombre: 'Tortilla Española', price: 8.00 },
      { id: 'p3', img: 'img/platos/plato-3.jpg', nombre: 'Guiso Manchego', price: 8.00 },
      // ... más platos
    ];
  }

  handleAddToCarrito(productId: string): void {
    const productToAdd = this.platos.find(p => p.id === productId);
    if (productToAdd) {
      this.addProduct.emit(productToAdd); // <--- Emitimos el producto completo
    }
  }
}
