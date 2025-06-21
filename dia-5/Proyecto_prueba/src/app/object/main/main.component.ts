import { Component } from '@angular/core';
import { HooksComponent } from '../hooks/hooks.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProductRestaurante } from '../../models/product-model'; //importamos el modelo
import { ProductCardComponent } from '../product-card/product-card.component';




@Component({
  selector: 'app-main',
  imports: [HooksComponent, NgIf, NgFor, CommonModule, ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    public titulo: string;
    public listado: string;
    public mostrar= true;
    public platos: ProductRestaurante[]; // declara que 'platos' es un array del modelo
   
 
    constructor() {
      this.titulo = 'titulo';
      this.listado = 'listado';
      this.mostrar = true;
      this.platos =[
        new ProductRestaurante('https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Plato+1', 'Paella Valenciana', 'Un clásico español con arroz, pollo, conejo y verduras frescas.', 15.50),
        new ProductRestaurante('https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Plato+2', 'Pulpo a la Gallega', 'Tierno pulpo cocido con patatas, pimentón y aceite de oliva virgen.', 18.00),
        new ProductRestaurante('https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Plato+3', 'Tortilla Española', 'Clásica tortilla de patatas con cebolla, jugosa por dentro.', 9.00),
        new ProductRestaurante('https://via.placeholder.com/300x200/FFFF33/000000?text=Plato+4', 'Gambas al Ajillo', 'Gambas frescas salteadas con ajo, guindilla y aceite de oliva.', 14.00),
      ]
     
    }


    mostrarHooks(value:boolean){
      this.mostrar= value
    }


}
