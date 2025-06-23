import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.interface';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
carritoItems: Product[] = [];
  totalCarrito: number = 0;

  constructor(private appComponent: AppComponent) { } // <--- Inyecta AppComponent

  ngOnInit(): void {
    // Accede directamente al carrito del AppComponent
    this.carritoItems = this.appComponent.carrito;
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.totalCarrito = this.carritoItems.reduce((acc, item) => acc + item.price, 0);
  }

  removeItem(productId: string): void {
    this.appComponent.removeProductFromCarrito(productId); // Llama al método del AppComponent
    this.carritoItems = this.appComponent.carrito; // Vuelve a cargar el carrito actualizado
    this.calcularTotal();
  }

  clearAll(): void {
    this.appComponent.clearCarrito(); // Llama al método del AppComponent
    this.carritoItems = this.appComponent.carrito; // Vuelve a cargar el carrito vacío
    this.calcularTotal();
  }

}
