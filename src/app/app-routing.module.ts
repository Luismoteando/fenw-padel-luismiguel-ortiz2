import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { InstallationsComponent } from './installations/installations.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'instalaciones', component: InstallationsComponent},
  { path: 'reservas', component: ReservationsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
