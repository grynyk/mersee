import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private url ='http://localhost:8080';
  private requestCreatedSource = new Subject<Request>();
  requestCreated$ = this.requestCreatedSource.asObservable();

  constructor(private http: Http , private httpClient:HttpClient) {}

  getData () {
    return this.http.get(this.url+"/data")
      .map((response: Response) => response.json());
}
  getRequestData (slug: string) {
    return this.http.get(this.url+"/data/"+slug)
    .map((response: Response) => response.json());
}
addRequest(request) {
  return this.httpClient.post(this.url+'/data/create', request)
                   .map((res:Response) => res.json()) 
                   .catch((error:any) => Observable.throw('Server error')); 
}   
editRequest(request,slug) {
  return this.httpClient.post(`${this.url}/data/${slug}/update`, request)
                   .map((res:Response) => res.json()) 
                   .catch((error:any) => Observable.throw('Server error')); 
}   

}