import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claseProducto'
})
export class ClaseProductoPipe implements PipeTransform {

  public transform(productos:Array<any>, clase:string): Array<any> {
    return productos.filter(p => p.clase.clase.toUpperCase() === clase.toUpperCase() );
  }

}
