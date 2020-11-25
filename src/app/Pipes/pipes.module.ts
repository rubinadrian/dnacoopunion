import { NgModule } from '@angular/core';
import { FtrArrObjPipe } from './ftr-arr-obj.pipe';
import { ClaseProductoPipe } from './clase-producto.pipe';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [
    FtrArrObjPipe,
    ClaseProductoPipe,
    SanitizeHtmlPipe
  ],
  exports: [
    FtrArrObjPipe,
    ClaseProductoPipe,
    SanitizeHtmlPipe
  ]
})
export class PipesModule { }
