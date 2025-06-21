import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hooks',
  imports: [],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent {
  public titulo = 'titulo';
  public listado = 'listado';
  public disponibilidad = true
  

  ngOnInit(){
    console.log('OnInit ejecutado')
  }

  ngDoCheck(){
    console.log('DoCheck ejecutado')
  }

  verificarDisponibilidad(){
    this.disponibilidad = false
    console.log("Disponible")
  }


}
