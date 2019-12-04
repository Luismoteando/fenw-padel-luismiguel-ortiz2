import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user.model';
import {SessionService} from '../../shared/services/session.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {faKey, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private faUser = faUser;
  private faKey = faKey;
  private token: string;
  private showError: boolean;
  private username: string;
  private password: string;
  private user: User = {
    username: '',
    password: '',
    email: '',
    birthdate: 0
  };

  constructor(private sessionService: SessionService, private location: Location, private router: Router) {
  }

  ngOnInit() {
  }

  private logIn() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.sessionService.logIn(this.user)
      .subscribe(
        (response) => {
          this.token = response.headers.get('Authorization');
          this.sessionService.setUserLoggedIn(this.username, this.token);
          this.location.replaceState('/reservas');
          this.router.navigate(['/reservas']);
        },
        (error) => {
          this.showError = true;
        }
      );
  }
}
