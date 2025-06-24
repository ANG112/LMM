import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../../data/product.interface';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  carrito: Product[] = [];

  constructor() {
    // Opcional: Cargar carrito desde localStorage al iniciar
    const storedCarrito = localStorage.getItem('carritoHome');
    if (storedCarrito) {
      this.carrito = JSON.parse(storedCarrito);
    }
  }

  ngOnInit(): void {
    // Puedes poner alguna lógica de inicialización si es necesario
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
    localStorage.setItem('carritoHome', JSON.stringify(this.carrito));
  }
}