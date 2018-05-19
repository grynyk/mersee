import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from '../../model/user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  matcher = new MyErrorStateMatcher();
  hide = true;
  
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  passowrdFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
  }

  login() {
    if (this.authenticationService.login(this.email, this.password))
      this.router.navigate(['']);
    else
      alert('Wrong credentials!');
  }
  registrate(){

  }
  ngOnInit() {
    this.authenticationService.logout();
    document.body.classList.add('login-bg-img');
  }

}
