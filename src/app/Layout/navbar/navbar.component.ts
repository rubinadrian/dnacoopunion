import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Services/producto.service';
import { Producto } from 'src/app/Models/Producto';
import { ClaseProductoPipe } from 'src/app/Pipes/clase-producto.pipe';
import { AuthService } from 'src/app/admin/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ClaseProductoPipe]
})
export class NavbarComponent implements OnInit {
  @ViewChild('eNavBar', {static: true}) eNavBar: ElementRef;
  traduccion=false;
  activeMenu = 'inicio';
  urlold = '';
  productos:Array<Producto> = [];

  constructor(public router: Router,
              private _ps: ProductoService,
              private claseProducto:ClaseProductoPipe,
              public _auth: AuthService ) {
    router.events.subscribe((url:any) => {
      if(url.url && url.url !== this.urlold) {
        this.activeMenu = url.url.split('/')[1];
        this.urlold = url.url;
        this.eNavBar.nativeElement.hidden = true;
      }
    });
  }

  isAuth():boolean {
    return this._auth.isAuth();
  }

  ngOnInit() {
    this.getProductos();
    this.eNavBar.nativeElement.hidden = true;
  }

  getProductos() {
    this._ps.getProductos().subscribe((productos:Array<Producto>)=> {this.productos=productos;});
  }

  hasItemsClass(clase) {
    if(this.productos.length > 0){
      return this.claseProducto.transform(this.productos, clase).length > 0;
    }

  }

  toggleNavBar() {
    this.eNavBar.nativeElement.hidden = !this.eNavBar.nativeElement.hidden;
  }


}
