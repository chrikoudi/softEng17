import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home' }
];
