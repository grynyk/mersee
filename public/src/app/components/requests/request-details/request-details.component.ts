import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../../services/api.service';
import { Observable } from 'rxjs/Rx'
@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  dataSource =[];
  component=false;
  constructor(private route:ActivatedRoute,private apiService:ApiService) { 
    
  }

  ngOnInit() {
    let slug = this.route.snapshot.params["slug"];
    this.apiService.getRequestData(slug)
    .subscribe(result => {
      this.dataSource = result;
      console.log(this.dataSource);
    });
  }

  loadComponent(){
    this.component = true;
  }

  

}
