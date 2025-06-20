import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ClientComponent } from './views/client/client.component';
import { AdminComponent } from './views/admin/admin.component';
import { RoomComponent } from './views/room/room.component';

export const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch:'full'}, //En caso de que no haya nada, me rediriges a la home por defecto
   {path: 'home', component: HomeComponent,
    children: [
        {path: 'client', component: ClientComponent}, //Para navegar a subrutas hay que hacerlo a través del componente de ahí que haya que poner lo de children
        {path: 'room', component: RoomComponent},
        {path: 'admin', component: AdminComponent}
    ]
   },
   {path: 'login', component: LoginComponent},
]
