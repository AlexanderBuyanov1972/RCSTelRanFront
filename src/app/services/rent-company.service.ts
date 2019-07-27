import {Injectable} from '@angular/core';
import {AbstractRentCompany} from './abstract-rent-company';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../dto/response-from';
import {PathHttps} from '../constants/path-https';

const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;

@Injectable({
  providedIn: 'root'
})
export class RentCompanyService extends AbstractRentCompany {

  constructor(private httpClient: HttpClient) {
    super();
  }
  getAllLocationBranches(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_LOCATION_BRANCHES);
  }

  getAllModelCars(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_JSON_MODELS_RCS);
  }

  calculate(object: any): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + '/calculate', object);
  }


}
