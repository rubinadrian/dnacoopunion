import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VisionmisionComponent } from './components/visionmision/visionmision.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'cooperativa', component: EmpresaComponent },
  { path: 'cooperativa/vision', component: VisionmisionComponent },
  { path: 'cooperativa/galeria', component: GaleriaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:class', component: ProductosComponent },
  { path: 'productos/:class/:search', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
