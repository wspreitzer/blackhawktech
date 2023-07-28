import { Component, OnInit } from '@angular/core';
import { State } from '../model/IState';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer/customer.service';
import { JwtAuthenticationService } from '../service/authentication/jwt-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
     lastName: new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required]),
     address: new FormControl('', [Validators.required]),
     city: new FormControl('', [Validators.required]),
     state: new FormControl('', [Validators.required]),
     zipCode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
     phoneNumber: new FormControl('', [Validators.required]),
     username: new FormControl('', [Validators.required]),
     password: new FormControl('', [Validators.required])
  })
  isUpdate: boolean = false;
  customer!: Customer;
  loggedInUser!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  address!: string;
  city!: string;
  state!: number;
  zipCode!: string;
  phoneNumber!: string;
  username!: string;
  password!: string;
  selectedState!: string;


  constructor(private service: CustomerService, private authService: JwtAuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if( this.authService.isUserLoggedIn() ) {
        this.isUpdate = true;
        this.service.getCustomerByUsername(this.loggedInUser).subscribe(
            response => {
                this.form.controls.firstName.setValue(response.firstName);
                this.form.controls.lastName.setValue(response.lastName);
                this.form.controls.email.setValue(response.email);
                this.form.controls.address.setValue(response.address);
                this.form.controls.city.setValue(response.city);
                this.form.controls.state.setValue(response.state);
                this.form.controls.zipCode.setValue(response.zipCode);
                this.form.controls.phoneNumber.setValue(response.phoneNumber);
                this.form.controls.username.setValue(response.username);
                this.form.controls.password.setValue(response.password);
                this.customer = new Customer(this.form.controls.firstName.value, this.form.controls.lastName.value, this.form.controls.email.value, this.form.controls.address.value, 
                  this.form.controls.city.value, this.form.controls.state.value, this.form.controls.zipCode.value, this.form.controls.phoneNumber.value, 
                  this.form.controls.username.value, this.form.controls.password.value);
            },
            error => {
                this.handleError(error);
            }
        ); 
    }
  }

  submit(form: FormGroup) {
    if( this.isUpdate) {
      this.service.updateCustomer(this.loggedInUser, this.customer).subscribe(
        response => this.handleResponse(response), error => this.handleError(error));
      } else {
        this.customer = new Customer(form.controls.firstName.value, form.controls.lastName.value, form.controls.email.value, 
          form.controls.address.value, form.controls.city.value, form.controls.state.value, form.controls.zipCode.value, 
          form.controls.phoneNumber.value, form.controls.username.value, form.controls.password.value);
        this.service.createCustomer(this.loggedInUser, this.customer).subscribe(
          response => this.handleResponse(response), 
          error => this.handleError(error)
        );
      }
  }

  handleResponse(response: any) {
    this.router.navigate(['login']);
  }

  handleError(error: any) {
    let status = error.error.status;
    let errorMessage = error.error.error
                        + " " +
                        error.error.message
                        + " " +
                        error.error.trace;
    this.router.navigate(['error', errorMessage, status]);
  }

  public error = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  states: State[] = [
    {id: 0, name: 'Alabama'},{id: 1, name: 'Alaska'},{id: 2, name:'Arizona'},{id: 3, name: 'Arkansas'}, {id: 4, name: 'American Samoa'},
    {id: 5, name: 'California'},{id: 6, name: 'Colorado'},{id: 7, name: 'Connecticut'},{id: 8, name: 'Delaware'},{id:9, name: 'District of Columbia'},
    {id: 10, name: 'Florida'},{id: 11, name: 'Georgia'},{id: 12, name: 'Guam'},{id: 13, name: 'Hawaii'},{id: 14, name: 'Idaho'},
    {id: 15, name: 'Illinois'},{id: 16, name: 'Indiana'},{id: 17, name: 'Iowa'},{id: 18, name: 'Kansas'},{id: 19, name: 'Kentucky'},
    {id: 20, name: 'Louisiana'},{id: 21, name: 'Maine'},{id: 22, name: 'Maryland'},{id: 23, name: 'Massachusetts'},{id: 24, name: 'Michigan'},
    {id: 25, name: 'Minnesota'},{id: 26, name: 'Mississippi'},{id: 27, name: 'Missouri'},{id: 28, name: 'Montana'},{id: 29, name: 'Nebraska'},
    {id: 30, name: 'Nevada'},{id: 31, name: 'New Hampshire'},{id: 32, name: 'New Jersey'},{id: 33, name: 'New Mexico'},{id: 34, name: 'New York'},
    {id: 35, name: 'North Carolina'},{id: 36, name: 'North Dakota'},{id: 37, name: 'Northern Mariana Islands'},{id: 38, name: 'Ohio'},{id: 39, name: 'Oklahoma'},
    {id: 40, name: 'Oregon'},{id: 41, name: 'Pennsylvania'},{id: 42, name: 'Puerto Rico'},{id: 43, name: 'Rhode Island'},{id: 44, name: 'South Carolina'},
    {id: 45, name: 'South Dakota'},{id: 46, name: 'Tennessee'},{id: 47, name: 'Texas'},{id: 48, name: 'Trust Territories'},{id: 49, name: 'Utah'},
    {id: 50, name: 'Vermont'},{id: 51, name: 'Virginia'},{id: 52, name: 'Virgin Islands'},{id: 53, name: 'Washington'},{id: 54, name: 'West Virginia'},
    {id: 55, name: 'Wisconsin'},{id: 56, name: 'Wyoming'}];
}
