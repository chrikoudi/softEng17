import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { routes } from './routes';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ResultsComponent } from './search-results/results.component';
import { BuypointsComponent } from './buypoints/buypoints.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CreateeventComponent } from './createevent/createevent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignupformComponent } from './signupform/signupform.component';
import { LocationService } from './services/location.service';
import { dateFormatPipe } from './dateFormatPipe';
import { DatePipe } from '@angular/common';
import { ProviderSignupformComponent } from './provider-signupform/provider-signupform.component';
import { TermsComponent } from './terms/terms.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    AppComponent,
    EventpageComponent,
    HeaderComponent,
    FooterComponent,
    ResultsComponent,
    BuypointsComponent,
    CreateeventComponent,
    dateFormatPipe,
    SignupformComponent,
    ProviderSignupformComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM'
    })
  ],
  providers: [AuthService, EventService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
