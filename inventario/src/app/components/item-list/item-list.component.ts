import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // <-- ¡Añade esta importación!

import { InventarioItem } from '../../../models/inventario-item';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // <-- ¡Y añádelo aquí!
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  inventario: InventarioItem[] = [];
  itemEditando: InventarioItem | null = null;

  constructor() { }

  ngOnInit(): void {
    this.cargarInventario();
    window.addEventListener('storage', this.onStorageChange.bind(this));
  }

  onStorageChange(event: StorageEvent): void {
    if (event.key === 'inventario') {
      this.cargarInventario();
    }
  }

  cargarInventario(): void {
    const itemsJson = localStorage.getItem('inventario');
    this.inventario = itemsJson ? JSON.parse(itemsJson) : [];
    console.log('Inventario cargado:', this.inventario);
  }

  eliminarItem(id: string): void {
    this.inventario = this.inventario.filter(item => item.id !== id);
    localStorage.setItem('inventario', JSON.stringify(this.inventario));
    console.log(`Ítem con ID ${id} eliminado.`);
  }

  editarItem(item: InventarioItem): void {
    this.itemEditando = { ...item };
    console.log('Editando ítem:', this.itemEditando);
  }

  guardarEdicion(): void {
    if (this.itemEditando) {
      this.inventario = this.inventario.map(item =>
        item.id === this.itemEditando!.id ? this.itemEditando! : item
      );
      localStorage.setItem('inventario', JSON.stringify(this.inventario));
      this.itemEditando = null;
      console.log('Edición guardada:', this.inventario);
    }
  }

  cancelarEdicion(): void {
    this.itemEditando = null;
    console.log('Edición cancelada.');
  }
}