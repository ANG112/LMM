import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/product.interface';

@Component({
  selector: 'app-card',
  imports: [CommonModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input ({required:true}) product!: Product;
  
  @Output() buttonClick = new EventEmitter<string>(); 

  onButtonClick(): void {
    this.buttonClick.emit(this.product.id);
  }

  getImagen() : string {
    const imagePath = `public/${this.product.img}`;
    console.log(`Intentando cargar imagen: ${imagePath}`); // ¡Añadimos este console.log!
    return imagePath;
  }
}


