import { Routes } from '@angular/router';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';

export const routes: Routes = [
    {path: 'agregar-item', component: ItemFormComponent},
    {path: 'ver-inventario', component: ItemListComponent},
    {path: '', redirectTo: '/agregar-item', pathMatch: 'full'},
    {path: '**', redirectTo: '/agregar-item'}
];
