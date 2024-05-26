import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './My-Components/navbar/navbar.component';
import { HomePageComponent } from './My-Components/home-page/home-page.component';
import { LoginComponent } from './My-Components/login/login.component';
import { CartComponent } from './My-Components/cart/cart.component';
import { ServicesComponent } from './My-Components/services/services.component';
import { ContactUsComponent } from './My-Components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
    CartComponent,
    ServicesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
