import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ¡IMPORTA FormsModule aquí!
import { CommonModule } from '@angular/common'; // <-- Importa CommonModule para directivas como *ngIf, si se usan en la plantilla

import { InventarioItem } from '../../../models/inventario-item'; 

@Component({
  selector: 'app-item-form',
  standalone: true, // <-- Componente standalone
  imports: [FormsModule, CommonModule], // <-- Añade FormsModule y CommonModule aquí
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css' // Puedes borrar este archivo si no usas CSS aquí
})
export class ItemFormComponent implements OnInit {
  newItem: InventarioItem = {
    id: '',
    nombre: '',
    cantidad: 0,
    precio: 0,
    fechaEntrada: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.newItem.fechaEntrada = new Date().toISOString().slice(0, 10);
  }

  agregarItem(): void {
    this.newItem.id = 'item_' + Date.now().toString();

    const itemsJson = localStorage.getItem('inventario');
    let inventario: InventarioItem[] = itemsJson ? JSON.parse(itemsJson) : [];

    inventario.push(this.newItem);

    localStorage.setItem('inventario', JSON.stringify(inventario));

    console.log('Ítem agregado:', this.newItem);

    this.newItem = {
      id: '',
      nombre: '',
      cantidad: 0,
      precio: 0,
      fechaEntrada: new Date().toISOString().slice(0, 10)
    };
  }
}