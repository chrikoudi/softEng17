import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';

export const routes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: 'home', component: HomeComponent },
    { path: 'events', component: EventpageComponent },
    { path: '**', redirectTo: 'home' }
];
