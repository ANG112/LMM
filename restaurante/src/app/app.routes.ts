import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PlatosComponent } from './views/platos/platos.component';
import { CoctailsComponent } from './views/coctails/coctails.component';
import { CarritoComponent } from './views/carrito/carrito.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full' },
    {path: 'home', component: HomeComponent,
        children: [
            {path: 'platos', component: PlatosComponent},
            {path: 'coctails', component: CoctailsComponent},
            {path: 'carrito', component: CarritoComponent}
        ]
    }

];
