import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  clase: string = '';
  search: string = '';
  isSearch = false;
  productos: Producto[] = [];

  constructor(  
      private route: ActivatedRoute,
      public _ps: ProductoService ) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        let search = params.get('search');
        let clase = params.get('class');
        if(clase) this.clase = clase;        
        if(search) this.search = search;        
      });
      this.getProductos();
  }

  getProductos() {
    this._ps.getProductos().subscribe((productos:Array<Producto>)=> {this.productos=productos});
  }

}