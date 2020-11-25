import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ftrArrObj'
})
export class FtrArrObjPipe implements PipeTransform {

  transform(arrayObjects:Array<any>,filter:string): any {
    return arrayObjects.filter(obj => JSON.stringify(obj).toLocaleLowerCase().search(filter.toLocaleLowerCase()) !== -1);
  }

}
