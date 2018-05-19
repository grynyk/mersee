import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private url ='../assets/test.json';
  
  constructor(private http: Http) {}

  getData () {
    return this.http.get(this.url)
      .map((response: Response) => response.json());
}
}