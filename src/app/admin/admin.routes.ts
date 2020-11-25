import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaseComponent } from './clase/clase.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoFormComponent } from './producto/form/producto.form.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard'


const routes: Routes = [
  { path: 'admin', component: LoginComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/clase', component: ClaseComponent, canActivate: [AdminGuard] },
  { path: 'admin/producto', component: ProductoComponent, canActivate: [AdminGuard]  },
  { path: 'admin/producto/form', component: ProductoFormComponent, canActivate: [AdminGuard]  },
  { path: 'admin/producto/form/:id', component: ProductoFormComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
