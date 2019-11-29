import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServicesComponent} from './components/services/services.component';
import {InstallationsComponent} from './components/installations/installations.component';
import {LoginComponent} from './components/login/login.component';
import {SigninComponent} from './components/signin/signin.component';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {IndexComponent} from './components/index/index.component';
import {SessionService} from './shared/services/session.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    InstallationsComponent,
    LoginComponent,
    SigninComponent,
    ReservationsComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
