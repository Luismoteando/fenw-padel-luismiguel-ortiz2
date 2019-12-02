import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ServicesComponent} from './components/services/services.component';
import {InstallationsComponent} from './components/installations/installations.component';
import {LoginComponent} from './components/login/login.component';
import {SigninComponent} from './components/signin/signin.component';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {IndexComponent} from './components/index/index.component';
import {AuthGuardService} from './shared/services/auth-guard.service';


const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'servicios', component: ServicesComponent},
    {path: 'instalaciones', component: InstallationsComponent},
    {path: 'reservas', component: ReservationsComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'signin', component: SigninComponent},
    {path: '**', redirectTo: ''}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
