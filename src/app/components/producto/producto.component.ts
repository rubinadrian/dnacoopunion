import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input('producto') producto:Producto;

  urlImages = environment.urlImages;

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goFileEspe(producto) {
    if(!producto.file_espe) return;

    let url = environment.urlPdfs + '' + producto.file_espe;
    // window.location.href = url;
    window.open(url, "_blank");
  }

  goFileSenasa(producto) {
    if(!producto.file_senasa) return;

    let url = environment.urlPdfs + '' + producto.file_senasa;
    // window.location.href = url;
    window.open(url, "_blank");
  }

}

