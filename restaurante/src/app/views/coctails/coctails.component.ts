import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/product.interface';
import { CardComponent } from '../../compo/card/card.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-coctails',
  imports: [CommonModule, CardComponent],
  templateUrl: './coctails.component.html',
  styleUrl: './coctails.component.scss'
})
  export class CoctailsComponent implements OnInit {
  coctails: Product[] = [];

  constructor(private homeComponent: HomeComponent) { } // <--- ¡INYECTA!

  ngOnInit(): void {
    this.coctails = [
      { id: 'c1', img: 'img/coctails/coctail-1.jpg', nombre: 'Mojito', price: 12.00, category: 'coctails' },
      { id: 'c2', img: 'img/coctails/coctail-2.jpg', nombre: 'Margarita', price: 10.50, category: 'coctails' },
      { id: 'c3', img: 'img/coctails/coctail-3.jpg', nombre: 'ColaBlanca', price: 10.50, category: 'coctails' },
    ];
  }

  handleAddToCarrito(productId: string): void {
    const productToAdd = this.coctails.find(c => c.id === productId);
    if (productToAdd) {
      this.homeComponent.addProductToCarrito(productToAdd);
      console.log(`Producto ${productToAdd.nombre} añadido (llamado desde CoctailsComponent)`);
    }
  }
}



