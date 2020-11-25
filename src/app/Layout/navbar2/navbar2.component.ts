import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { ProductoService } from 'src/app/Services/producto.service';
import { ClaseProductoPipe } from 'src/app/Pipes/clase-producto.pipe';
import { AuthService } from 'src/app/admin/auth.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css'],
  providers: [ClaseProductoPipe]
})
export class Navbar2Component implements OnInit {
  productos:Array<Producto> = [];
  navbarActive = true;

  constructor(public router: Router,
              private _ps: ProductoService,
              private claseProducto:ClaseProductoPipe,
              public _auth: AuthService,
              private _chgdr: ChangeDetectorRef ) {
}

  ngOnInit() {
    this._ps.getProductos().subscribe((productos:Array<Producto>)=> {
      this.productos=productos;
      this._chgdr.detectChanges();
      this.listenLinks();
    });

    this._auth.isAdmin.subscribe(() => {
      setTimeout(() => {
        this.listenLinks();
      }, 1000);
    });
  }

  listenLinks() {
    const linksNavbar = document.querySelectorAll('#barra_navegacion a');
    linksNavbar.forEach(e => fromEvent(e, 'click').subscribe(() => {
      this.closeAllDropdown();
      this.navbarActive = false;
    }));
  }

  toggleDropdown(event, closeAll=false) {
    if(closeAll) {
      let putBack = false;
      if(event.target.classList.contains("activa")) {
        putBack = true;
      }
      this.closeAllDropdown();
      if(putBack) {
        event.target.classList.add("activa");
      }
    }
    event.preventDefault();
    event.stopPropagation();
    const element = event.target;
    element.classList.toggle("activa");
    this.animation(event);
  }


  closeAllDropdown() {
    const desplegables = document.querySelectorAll('#barra_navegacion .activa');
    desplegables.forEach(e => e.classList.remove("activa"));
  }

  hasItemsClass(clase) {
    if(this.productos.length > 0){
      return this.claseProducto.transform(this.productos, clase).length > 0;
    }
  }


  animation(event) {
    let e:any = event.target;
    let p:any = e.parentNode;
    let animationName = "fadeIn";
    if(!e || !p) return;
    e.classList.add('animated', animationName);
    e.addEventListener('animationend', () => e.classList.remove('animated', animationName));
    if(!p.children[1]) return;
    p.children[1].classList.add('animated', animationName);
    p.children[1].addEventListener('animationend', () => p.children[1].classList.remove('animated', animationName));
  }

}
