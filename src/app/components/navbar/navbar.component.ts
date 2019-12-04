import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../shared/services/session.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: SessionService, private location: Location, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.sessionService.removeUserLoggedIn();
    this.location.replaceState('/');
    this.router.navigate(['']);
  }
}
