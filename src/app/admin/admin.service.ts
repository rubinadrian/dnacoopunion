import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = environment.urlBackEnd;
  token: string;

  constructor(public http:HttpClient, public _auth:AuthService) { }

  getClases() {
    return this.http.get(this.url + 'clase');
  }

  saveClase(clase) {
    const headers = this._auth.getHeaders();
    return this.http.post(this.url + 'clase', clase, {headers});
  }

  delClase(id) {
    const headers = this._auth.getHeaders();
    return this.http.delete(this.url + 'clase/' + id, {headers});
  }

  getProducto(id) {
    return this.http.get(this.url + 'producto/' + id);
  }

  getProductos() {
    return this.http.get(this.url + 'producto');
  }

  saveProducto(producto,fileImage:File|null,file_senasa:File|null,file_espe:File|null) {
    const formData: FormData = new FormData();
    const headers = this._auth.getHeaders();

    for ( var key in producto ) {
      formData.append(key, producto[key]);
      // console.log(key, producto[key]);
    }
      
    if(fileImage) {
      formData.append('imagen', fileImage, fileImage.name);
    }

    if(file_senasa) {
      formData.append('file_senasa', file_senasa, file_senasa.name);
    }

    if(file_espe) {
      formData.append('file_espe', file_espe, file_espe.name);
    }

    return this.http.post(this.url + 'producto', formData, {headers});
  }

  delProducto(id) {
    const headers = this._auth.getHeaders();

    return this.http.delete(this.url + 'producto/' + id, {headers});
  }

}
