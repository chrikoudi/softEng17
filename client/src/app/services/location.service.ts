import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {

    constructor(private http: HttpClient) { }

    getLocation(): Observable<any> {
      return this.http.get<any>('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback')  
    }

}
