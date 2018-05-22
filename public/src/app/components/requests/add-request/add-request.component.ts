import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  selectedValue: string;
  types = [
    {value: 'mental', viewValue: 'Mental help'},
    {value: 'physical', viewValue: 'Physical help'},
    {value: 'other', viewValue: 'Other help'}
  ];
request = {};

  constructor(private apiService:ApiService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
   
}

submitRequest() {
  this.apiService.addRequest(this.request)
    .subscribe(res => {
        console.log(res);
      },err => {
        console.log("Error occured");
    });
    this.router.navigateByUrl('/');
  }


}