import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';
import { AUTHENTICATION_URL, AUTHENTICATED_USER, TOKEN } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService extends AuthenticationService {

  constructor(private http: HttpClient) {
    super();
  }

  executeJwtAuthenticationService(username:string, password:string) {
    return this.http.post(AUTHENTICATION_URL, {
      username, password
    }).pipe(
      map(
        (response:any) => {
          sessionStorage.setItem(TOKEN, `Bearer ${response.token}`)
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          return response;
        }
      )
    );
  }
}
export class AuthenticationBean {
  constructor(public message:string) {}
}
