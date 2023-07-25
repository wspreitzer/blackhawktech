import { Injectable } from '@angular/core';
import { AUTHENTICATED_USER, TOKEN } from 'src/app/app.constants';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user!: string | null;

  constructor() { }

  getAuthenticatedUser() {
    if(this.isUserLoggedIn()) {
      this.user = sessionStorage.getItem(AUTHENTICATED_USER);
    }
  }
  isUserLoggedIn() : boolean {
    return !(sessionStorage.getItem(TOKEN) === null);
  }

  logout() {
    sessionStorage.clear();
  }

  createAuthToken(username: string, password: string): string {
    return 'Basic ' + window.btoa(username + ':' + password);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}