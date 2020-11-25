import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = environment.urlBackEnd;

  constructor(public http:HttpClient) {} 

  getNews() {
    return this.http.get(this.url + 'noticias');
  }

  getNoticia(id) {
    return this.http.get(this.url + 'noticias/' + id );
  }

}