import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  // private serviceUrl = environment.apiHost + ':' + environment.apiPort;
  constructor(private http: HttpClient) { }

  saveItems(item) {
    return this.http.post('http://localhost:9000/saveitem', item, {headers: this.headers});
  }

  borrowItems(items) {
    return this.http.post('http://localhost:9000/borrowitem', items, {headers: this.headers});
  }

  getSlots(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/additem', {headers: this.headers});
  }

  deleteItem(isbn): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/deleteitem/' + isbn, {headers: this.headers});
  }

  displayItems(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/displayitems', {headers: this.headers});
  }

  returnItems(isbn): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/returnItem/' + isbn, {headers: this.headers});
  }

  generateReport(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/report', {headers: this.headers});

  }

  getAvailableSlots():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:9000/availableSlots',{headers: this.headers})
  }


}
