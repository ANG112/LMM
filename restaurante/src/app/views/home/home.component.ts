import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../../data/product.interface';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
carrito: Product[] = [];

  constructor() {
    // Opcional: Cargar carrito desde localStorage al iniciar
    const storedCarrito = localStorage.getItem('carritoSimple');
    if (storedCarrito) {
      this.carrito = JSON.parse(storedCarrito);
    }
  }

  // Método para añadir un producto al carrito
  // Este método será llamado desde PlatosComponent y CoctailsComponent
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

  // Método para eliminar un producto del carrito
  // Este método será llamado desde CarritoComponent
  removeProductFromCarrito(productId: string): void {
    this.carrito = this.carrito.filter(item => item.id !== productId);
    this.saveCarrito();
    console.log(`Producto con ID ${productId} eliminado del carrito.`);
  }

  // Método para vaciar el carrito
  clearCarrito(): void {
    this.carrito = [];
    this.saveCarrito();
    console.log('Carrito vaciado.');
  }

  // Guardar en localStorage para persistencia simple
  private saveCarrito(): void {
    localStorage.setItem('carritoSimple', JSON.stringify(this.carrito));
  }

}
