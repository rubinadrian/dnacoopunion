import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var $;

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos = [];
  search='';
  urlImages = environment.urlImages;

  constructor(public _as: AdminService, private router:Router) { }

  ngOnInit() {
    this.getProductos();
    $('[data-toggle="popover"]').popover();
  }

  addProducto() {
    this.router.navigate(['admin/producto/form']);
  }

  getProductos() {
    this._as.getProductos().subscribe((p:any)=>{this.productos = p});
  }

  editProducto(producto) {
    this.router.navigate(['admin/producto/form', {id:producto.id}]);
  }

  delProducto(producto, event) {
    event.stopPropagation();
    event.preventDefault();
    if(confirm('Esta seguro de borrar este producto?')){
      this._as.delProducto(producto.id).subscribe(()=>{
        this.getProductos();
      });
    }
  }

}
