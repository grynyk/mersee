import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  selectedValue: string;

  requestTypes = [
    {value: 'charity-0', viewValue: 'Charity'},
    {value: 'physical-1', viewValue: 'Physical'},
    {value: 'mental-2', viewValue: 'Mental'},
    {value: 'other-3', viewValue: 'Other'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  
  this.fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required]
  });
}
}
