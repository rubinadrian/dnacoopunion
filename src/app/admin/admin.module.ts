import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routes';
import { ProductoComponent } from './producto/producto.component';
import { ClaseComponent } from './clase/clase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductoFormComponent } from './producto/form/producto.form.component';
import { PipesModule } from '../Pipes/pipes.module';
import { LoginComponent } from './login/login.component';
// import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    ProductoComponent,
    ClaseComponent,
    ProductoFormComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule,
    
    // CKEditorModule
  ]
})
export class AdminModule { }
