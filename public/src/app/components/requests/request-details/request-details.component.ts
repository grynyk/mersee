import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../../../services/api.service';
import { Observable } from 'rxjs/Rx'
@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  dataSource :any;
  selectedValue: string;
  types = [
    {value: 'mental', viewValue: 'Mental help'},
    {value: 'physical', viewValue: 'Physical help'},
    {value: 'other', viewValue: 'Other help'}
  ];
request :any;
componentLoaded=false;
  constructor(private route:ActivatedRoute,private router:Router,private apiService:ApiService) { 
    
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
    this.componentLoaded = true;
  }
  updateRequest() {
    this.apiService.updateRequest(this.dataSource)
      .subscribe(res => {
          console.log(res);
        });
      this.router.navigateByUrl('/');
    }
  

}
