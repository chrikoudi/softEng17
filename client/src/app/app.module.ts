import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routes} from './routes';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    EventpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
