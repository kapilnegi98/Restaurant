import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { StartersComponent } from './starters/starters.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MainComponent } from './main/main.component';
import { DessertsComponent } from './desserts/desserts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DrinksComponent } from './drinks/drinks.component';
import { CartComponent } from './cart/cart.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu/starters', component: StartersComponent },
  { path: 'menu/main', component: MainComponent },
  { path: 'menu/desserts', component: DessertsComponent },
  { path: 'menu/drinks', component: DrinksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    StartersComponent,
    AboutComponent,
    FooterComponent,
    ReservationComponent,
    MainComponent,
    DessertsComponent,
    GalleryComponent,
    LoginComponent,
    SignupComponent,
    DrinksComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
