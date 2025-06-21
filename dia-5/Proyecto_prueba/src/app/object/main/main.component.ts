import { Component } from '@angular/core';
import { HooksComponent } from '../hooks/hooks.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-main',
  imports: [HooksComponent, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    public titulo: string;
    public listado: string;
    public mostrar= true
 
    constructor() {
      this.titulo = 'titulo';
      this.listado = 'listado'
      this.mostrar = true
    }


    mostrarHooks(value:boolean){
      this.mostrar= value
    }


}
