import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  url = environment.urlBackEnd;

  constructor(public http:HttpClient) {} 

  sendMail(data:{ nombre:string, telefono:string, email:string, mensaje:string }) {
    return this.http.post(this.url + 'contact', data);
  }

}
