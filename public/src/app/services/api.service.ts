import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private url ='http://localhost:8080/port';
  
  constructor(private http: Http) {}

  getData () {
    return this.http.get(this.url)
      .map((response: Response) => response.json());
}
}