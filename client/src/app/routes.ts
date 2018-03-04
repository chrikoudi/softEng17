import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ProviderSignupformComponent } from './provider-signupform/provider-signupform.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { ResultsComponent } from 'app/search-results/results.component';
import { BuypointsComponent } from './buypoints/buypoints.component';
import { CreateeventComponent } from './createevent/createevent.component';

export const routes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: 'signup', component: SignupformComponent},
    { path: 'provider-signup', component: ProviderSignupformComponent},
    { path: 'home', component: HomeComponent },
    { path: 'results/:id', component: EventpageComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'buypoints', component: BuypointsComponent },
    { path: 'create', component: CreateeventComponent },
    { path: '**', redirectTo: 'home' }
];
