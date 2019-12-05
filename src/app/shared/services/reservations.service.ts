import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private baseurl = 'http://fenw.etsisi.upm.es:10000';

  constructor(private http: HttpClient, private sessionService: SessionService) {
  }

  listDateReservations(date: number) {
    const headers = new HttpHeaders({Authorization: this.sessionService.getToken()});
    return this.http.get(this.baseurl + '/reservations/' + date,
      {
        headers,
        observe: 'response'
      });
  }

  listUserReservations(username: string) {
    const headers = new HttpHeaders({Authorization: this.sessionService.getToken()});
    return this.http.get(this.baseurl + '/reservations/' + username,
      {
        headers,
        observe: 'response'
      });
  }

  listMyReserevations() {
    const headers = new HttpHeaders({Authorization: this.sessionService.getToken()});
    return this.http.get(this.baseurl + '/reservations',
      {
        headers,
        observe: 'response'
      });
  }

  reserve(courtId: number, datetime: number) {
    const headers = new HttpHeaders({Authorization: this.sessionService.getToken(), 'Content-Type': 'application/json'});
    return this.http.post(this.baseurl + '/reservations',
      {
        courtid: courtId,
        rsvdatetime: datetime
      },
      {
        headers,
        observe: 'response'
      }
    );
  }
}
