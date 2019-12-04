import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../shared/models/reservation.model';
import {SessionService} from '../../shared/services/session.service';
import {ReservationsService} from '../../shared/services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  private hoursCourt1: string[];
  private hoursCourt2: string[];
  private hoursCourt3: string[];
  private hoursCourt4: string[];
  private dateReservationsList: Reservation[];
  private myReservationsList: Reservation[];
  private username: string;
  private datetime: number;
  private date: string;

  constructor(private sessionService: SessionService, private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.username = this.sessionService.username;
    this.listMyReservations();
  }

  private listDateReservations() {
    this.reservationsService.listDateReservations(new Date(this.date).getTime()).subscribe(
      (response) => {
        this.dateReservationsList = response.body as Reservation[];
        for (let i = 1; i < 5; i++) {
          this.availableHours(i);
        }
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }

  private listMyReservations() {
    this.reservationsService.listMyReserevations().subscribe(
      (response) => {
        this.myReservationsList = response.body as Reservation[];
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }

  private availableHours(courtid: number) {
    this.hoursCourt1 = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    this.hoursCourt2 = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    this.hoursCourt3 = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    this.hoursCourt4 = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    for (const reservation of this.dateReservationsList) {
      switch (reservation.courtId) {
        case 1:
          for (let i = this.hoursCourt1.length - 1; i >= 0; i--) {
            const dateTimeCourt1 = new Date((this.date + ' ' + this.hoursCourt1[i]).replace(/-/g, '/')).getTime();
            if (this.hoursCourt1[i] === reservation.rsvtime) {
              this.hoursCourt1.splice(i, 1);
            }
          }
          break;
        case 2:
          for (let i = this.hoursCourt2.length - 1; i >= 0; i--) {
            const dateTimeCourt2 = new Date((this.date + ' ' + this.hoursCourt2[i]).replace(/-/g, '/')).getTime();
            if (this.hoursCourt2[i] === reservation.rsvtime) {
              this.hoursCourt2.splice(i, 1);
            }
          }
          break;
        case 3:
          for (let i = this.hoursCourt3.length - 1; i >= 0; i--) {
            const dateTimeCourt3 = new Date((this.date + ' ' + this.hoursCourt3[i]).replace(/-/g, '/')).getTime();
            if (this.hoursCourt3[i] === reservation.rsvtime) {
              this.hoursCourt3.splice(i, 1);
            }
          }
          break;
        case 4:
          for (let i = this.hoursCourt4.length - 1; i >= 0; i--) {
            const dateTimeCourt4 = new Date((this.date + ' ' + this.hoursCourt4[i]).replace(/-/g, '/')).getTime();
            if (this.hoursCourt4[i] === reservation.rsvtime) {
              this.hoursCourt4.splice(i, 1);
            }
          }
          break;
      }
    }
  }

  private reserve(courtId: number, rsvtime: string) {
    if (confirm('¿Quiere confirmar su reserva?')) {
      this.datetime = new Date((this.date + ' ' + rsvtime).replace(/-/g, '/')).getTime();
      this.reservationsService.reserve(courtId, this.datetime).subscribe(
        (response) => {
          this.listDateReservations();
          this.listMyReservations();
        },
        (error) => {
          alert('⚠️ No se pudo realizar la reserva. Debe seleccionar fecha y hora posterior a la actual.');
          console.log(error.toString());
        }
      );
    }
  }
}
