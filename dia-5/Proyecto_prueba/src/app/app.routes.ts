import { Routes } from '@angular/router';
import { PaginaIndependienteComponent } from './views/pagina-independiente/pagina-independiente.component';
import { AsideDerechaComponent } from './views/aside-derecha/aside-derecha.component';
import { AsideIzquierdaComponent } from './views/aside-izquierda/aside-izquierda.component';

export const routes: Routes = [
    {path:'pagina-independiente', component: PaginaIndependienteComponent},
    {path: 'aside-izquierda', component:AsideIzquierdaComponent},
    {path: 'aside-derecha', component:AsideDerechaComponent}

];
