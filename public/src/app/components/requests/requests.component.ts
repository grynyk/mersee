import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  isLinear = true;
  FormGroup: FormGroup;
  selectedValue: string;
  successMessage:string = "";
  errorMessage:string = "";
  request = {topic:'',location:'',type:'',description:'',duration:''};
  types = [
    {value: 'charity-0', viewValue: 'Charity'},
    {value: 'physical-1', viewValue: 'Physical'},
    {value: 'mental-2', viewValue: 'Mental'},
    {value: 'other-3', viewValue: 'Other'}
  ];

  constructor(private _formBuilder: FormBuilder,private apiService:ApiService) { }

  ngOnInit() {
    this.FormGroup = this._formBuilder.group({
      Ctrl: ['', Validators.required]
    });
}
createRequest(){
  this.apiService.createRequest(this.request)
  .subscribe(request =>{
    this.successMessage = "Request success";
    console.log("Created");
  })
}
}
