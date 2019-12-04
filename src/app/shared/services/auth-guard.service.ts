import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SessionService} from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  canActivate() {
    if (!this.sessionService.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
