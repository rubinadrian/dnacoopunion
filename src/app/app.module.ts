import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VisionmisionComponent } from './components/visionmision/visionmision.component';
import { AdminModule } from './admin/admin.module';
import { PipesModule } from './Pipes/pipes.module';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationComponent } from './translation/translation.component';
import { NewfeedComponent } from './components/newfeed/newfeed.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { Navbar2Component } from './Layout/navbar2/navbar2.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    HomeComponent,
    EmpresaComponent,
    ProductosComponent,
    ContactoComponent,
    ProductoComponent,
    VisionmisionComponent,
    TranslationComponent,
    NewfeedComponent,
    NoticiaComponent,
    GaleriaComponent,
    Navbar2Component,
    Carousel2Component
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
