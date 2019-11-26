import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { InstallationsComponent } from './installations/installations.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
