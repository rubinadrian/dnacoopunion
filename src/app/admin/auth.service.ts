import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAdmin = new BehaviorSubject(false);
  private token:string;
  private url = environment.urlBackEnd;
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      })
    };
  }


  login(data) {
    return this.http.post(this.url + 'auth/login', data, {headers: this.options} )
    .pipe(map((resp:{access_token:string}) => {
      this.isAdmin.next(true);
      this.saveToken(resp.access_token);
      return resp;
    }));
  }

  saveToken(token:string) {
    this.token = token;
    localStorage.setItem('token', token);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    //headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.getToken());
    return headers;
  }

  isAuth(): boolean {

    if ( this.token && this.token.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      this.isAdmin.next(true);
      return true;
    } else {
      this.isAdmin.next(false);
      return false;
    }


  }

}
