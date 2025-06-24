import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/product.interface';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
  carritoItems: Product[] = [];
  totalCarrito: number = 0;

  // Inyecta HomeComponent en el constructor
  constructor(private homeComponent: HomeComponent) { } // <--- ¡INYECTA!

  ngOnInit(): void {
    // Al iniciar, leemos el carrito del HomeComponent
    this.carritoItems = this.homeComponent.carrito;
    this.calcularTotal();

    // Puedes añadir un console.log para depurar el estado inicial.
    console.log("Carrito en CarritoComponent ngOnInit:", this.carritoItems);
  }

  calcularTotal(): void {
    this.totalCarrito = this.carritoItems.reduce((acc, item) => acc + item.price, 0);
  }

  removeItem(productId: string): void {
    this.homeComponent.removeProductFromCarrito(productId); // Llama al método del HomeComponent
    this.carritoItems = this.homeComponent.carrito; // <--- Vuelve a cargar el array actualizado
    this.calcularTotal();
    console.log("Item eliminado, Carrito actualizado:", this.carritoItems);
  }

  clearAll(): void {
    this.homeComponent.clearCarrito(); // Llama al método del HomeComponent
    this.carritoItems = this.homeComponent.carrito; // <--- Vuelve a cargar el array vacío
    this.calcularTotal();
    console.log("Carrito vaciado, Carrito actualizado:", this.carritoItems);
  }

    getImagenUrl(item: Product): string {
    return `public/${item.img}`;
  }
}
