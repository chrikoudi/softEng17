import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Event } from '../models/event';

interface Geo {
  lat: number;
  lon: number;
}

@Injectable()
export class EventService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // GET Event by ID

  getEvents (): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.BASE_URL}/api/events`)
    .pipe(
      catchError(this.handleError('getEvents', []))
    );
  }

  getEvent(id: string): Observable<Event> {
    const url = `${this.BASE_URL}/api/events/${id}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /* GET heroes whose name contains search term */

    searchEvents(searchTerms: string, geo: Geo, distance: number): Observable<Event[]> {
      if (!searchTerms.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      // tslint:disable-next-line:max-line-length
      return this.http.get<Event[]>(`${this.BASE_URL}/api/events/search?searchTerms=${searchTerms}&distance=${distance}&lat=${geo.lat}&lon=${geo.lon}`).pipe(
        catchError(this.handleError<Event[]>('searchEvents', []))
      );
    }
}
