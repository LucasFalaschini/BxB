import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { InViewportModule } from 'ng-in-viewport';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { PaqueteComponent } from './components/paquete/paquete.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarruselComponent,
    PaqueteComponent,
    ContactoComponent,
    FooterComponent,
    QuienessomosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    InViewportModule,
    LayoutModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
