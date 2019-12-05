import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SessionService} from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService) {
  }

  canActivate() {
    if (this.sessionService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
