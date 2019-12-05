import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

export const TOKEN_NAME = 'token';
export const USERNAME_NAME = 'user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseurl = 'http://fenw.etsisi.upm.es:10000';

  constructor(private http: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    if (token) {
      localStorage.setItem(TOKEN_NAME, token);
    }
  }

  getUsername(): string {
    return localStorage.getItem(USERNAME_NAME);
  }

  setUsername(username: string) {
    localStorage.setItem(USERNAME_NAME, username);
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
    this.setToken(token);
    this.setUsername(username);
  }

  removeUserLoggedIn() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
}
