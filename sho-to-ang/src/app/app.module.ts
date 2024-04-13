import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { GuestComponent } from './guest/guest.component';
import { PrhComponent } from './prh/prh.component';
import { SearchComponent } from './search/search.component';
import { NewguestComponent } from './newguest/newguest.component';
import { SignComponent } from './sign/sign.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    HeaderComponent,
    MenuComponent,
    GuestComponent,
    PrhComponent,
    SearchComponent,
    NewguestComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, 
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
