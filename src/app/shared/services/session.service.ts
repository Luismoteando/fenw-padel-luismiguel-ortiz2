import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  username: string;
  token: string;
  private baseurl = 'http://fenw.etsisi.upm.es:10000';

  constructor(private http: HttpClient) {
  }

  logIn(user: User) {
    return this.http.get(this.baseurl + '/users/login?username=' + user.username + '&password=' + user.password,
      {
        observe: 'response'
      }
    );
  }

  signIn(user: User) {
    return this.http.post(this.baseurl + '/users',
      {
        username: user.username,
        email: user.email,
        password: user.password,
        birthdate: user.birthdate
      },
      {
        observe: 'response'
      }
    );
  }

  checkExistsUser(username: string) {
    return this.http.get(this.baseurl + '/users/' + username,
      {
        observe: 'response'
      }
    );
  }

  setUserLoggedIn(username: string, token: string) {
    this.username = username;
    this.token = token;
    localStorage.setItem('username', this.username);
    localStorage.setItem('token', this.token);
  }

  removeUserLoggedIn() {
    this.username = '';
    this.token = '';
    localStorage.setItem('username', this.username);
    localStorage.setItem('token', this.token);
  }

  isLogged(): boolean {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      if (username) {
        this.username = username;
      }
      return true;
    } else {
      return false;
    }
  }
}
