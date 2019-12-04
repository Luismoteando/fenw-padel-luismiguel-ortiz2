import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user.model';
import {SessionService} from '../../shared/services/session.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {faBirthdayCake, faEnvelope, faKey, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private faUser = faUser;
  private faEnvelope = faEnvelope;
  private faKey = faKey;
  private faBirthdayCake = faBirthdayCake;
  private token: string;
  private showRequiredFieldsError: boolean;
  private showUsernameError: boolean;
  private showPasswordError: boolean;
  private newUsername: string;
  private newEmail: string;
  private newPassword: string;
  private repeatPassword: string;
  private newBirthdate = 0;
  private newUser: User = {
    username: '',
    email: '',
    password: '',
    birthdate: 0
  };

  constructor(private sessionService: SessionService, private location: Location, private router: Router) {
  }

  ngOnInit() {
  }

  private signIn() {
    this.newUser = {
      username: this.newUsername,
      email: this.newEmail,
      password: this.newPassword,
      birthdate: this.newBirthdate
    };
    this.sessionService.signIn(this.newUser)
      .subscribe(
        (response) => {
          this.token = response.headers.get('Authorization');
          this.sessionService.setUserLoggedIn(this.newUsername, this.token);
          this.location.replaceState('/reservas');
          this.router.navigate(['/reservas']);
        },
        (error) => {
          this.showRequiredFieldsError = true;
        }
      );
  }

  private checkExistsUser() {
    this.sessionService.checkExistsUser(this.newUsername).subscribe(
      (response) => {
        this.showUsernameError = true;
      },
      (error) => {
        this.showUsernameError = false;
      }
    );
  }

  private doublePasswordCheck() {
    this.showPasswordError = (this.newPassword !== this.repeatPassword);
  }
}
