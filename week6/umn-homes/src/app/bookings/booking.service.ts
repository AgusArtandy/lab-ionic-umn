import { Injectable } from '@angular/core';
import { Booking } from './create-booking/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[]=[
    {
      id:'xyz',
      placeId:'p1',
      placeTitle:'Place Blablabla',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  constructor() { }

  get bookings(){
    return[...this._bookings];
  }
}
