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
  
  title = 'my-app';
  carrito: Product[] = [];

  constructor() {
    const storedCarrito = localStorage.getItem('carritoSimple');
    if (storedCarrito) {
      this.carrito = JSON.parse(storedCarrito);
    }
  }

  addProductToCarrito(product: Product): void {
    const existingProduct = this.carrito.find(item => item.id === product.id);
    if (existingProduct) {
      console.log(`Producto ${product.nombre} ya está en el carrito.`);
    } else {
      this.carrito.push(product);
      this.saveCarrito();
      console.log(`Producto ${product.nombre} añadido al carrito.`);
    }
  }

  removeProductFromCarrito(productId: string): void {
    this.carrito = this.carrito.filter(item => item.id !== productId);
    this.saveCarrito();
    console.log(`Producto con ID ${productId} eliminado del carrito.`);
  }

  clearCarrito(): void {
    this.carrito = [];
    this.saveCarrito();
    console.log('Carrito vaciado.');
  }

  private saveCarrito(): void {
    localStorage.setItem('carritoSimple', JSON.stringify(this.carrito));
  }


}
