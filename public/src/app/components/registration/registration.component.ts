import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from '../../model/user';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  firstname:string;
  lastname:string;
  email: string;
  state:string;
  city:string;
  zip:string;
  password: string;
  hide = true;
  
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  passowrdFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
  }
  registrate(){

  }
  ngOnInit() {
    this.authenticationService.logout();
    document.querySelector('body').style.backgroundColor = "#3F51B5";
  }

}
