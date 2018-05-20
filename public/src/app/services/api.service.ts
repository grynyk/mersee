import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class ApiService {
  private url ='http://localhost:8080';
  
  
  constructor(private http: Http) {}

  getData () {
    return this.http.get(this.url)
      .map((response: Response) => response.json());
}
  getRequestData (slug: string) {
    return this.http.get(this.url+"/data/"+slug)
    .map((response: Response) => response.json());
}
  createRequest(request){
  return this.http.post(this.url+"/data/create",request)
  .map((response: Response) => response.json());
  }
  
}