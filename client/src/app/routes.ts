import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: '**', redirectTo: '' }
];
