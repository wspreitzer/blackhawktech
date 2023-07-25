import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/authentication/jwt-authentication.service';
import { AuthenticationBean } from '../service/authentication/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });
  username = '';
  password = '';
  bean!: AuthenticationBean;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router: Router, private jwtAuthenticated: JwtAuthenticationService) { }

  ngOnInit(): void {

  }

  handleJwtAuthLogin() {
    this.jwtAuthenticated.executeJwtAuthenticationService(this.username, this.password).subscribe(
      response => {
        this.handleSuccess(response);
      }, error => {
        this.handleError(error);
      }
    );
  }

  handleSuccess(response: any) {
    this.router.navigate(['welcome', this.username]);
  }

  handleError(error: any) {
  this.invalidLogin = true;
  sessionStorage.clear();
  }

  public error = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}