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
import { PdfDownloaderComponent } from './pdf-downloader/pdf-downloader.component';
import { ResultsComponent } from './search-results/results.component';
import { BuypointsComponent } from './buypoints/buypoints.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // memory-server
import { InMemoryDataService } from './services/in-memory-data.service'; // memory server

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    AppComponent,
    EventpageComponent,
    HeaderComponent,
    FooterComponent,
    PdfDownloaderComponent,
    ResultsComponent,
    BuypointsComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
