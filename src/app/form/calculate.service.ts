import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseFromServer} from './response-from-server';

const url = 'localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) {
  }

  calculate(object: any): Observable<ResponseFromServer> {
    return this.http.post<ResponseFromServer>(url + '/calculate', object);
  }
}

