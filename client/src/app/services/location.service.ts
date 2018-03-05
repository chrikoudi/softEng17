import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
import { Event } from '../models/event';

@Injectable()
export class LocationService {
    event: Event;
    constructor(private http: Http) { }

    // getLocation(): Observable<any> {
    //   // tslint:disable-next-line:max-line-length
    //   return this.http.get<any>('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback');
    // }

    getLatLon(term: string): Promise<any> {
      // tslint:disable-next-line:max-line-length
      return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + term + ', ΕλλάδαCA&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback&language=el')
           .toPromise()
           .then((response) => Promise.resolve(response.json()))
           .catch((error) => Promise.resolve(error.json()));
   }

   getLοcation(geo): Promise<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + geo.lat + ',' + geo.lon + '&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback&language=el')
         .toPromise()
         .then((response) => Promise.resolve(response.json()))
         .catch((error) => Promise.resolve(error.json()));
 }

  // geolocation(): Promise<any> {
  //   return this.http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback', )
  //   .toPromise()
  //   .then((response) => Promise.resolve(response.json()))
  //   .catch((error) => Promise.resolve(error.json()));
  // }
}
