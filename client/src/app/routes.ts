import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { ResultsComponent } from 'app/search-results/results.component';
import { BuypointsComponent } from './buypoints/buypoints.component';

export const routes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: 'home', component: HomeComponent },
    { path: 'results/:id', component: EventpageComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'buypoints', component: BuypointsComponent },
    { path: '**', redirectTo: 'home' }
];
