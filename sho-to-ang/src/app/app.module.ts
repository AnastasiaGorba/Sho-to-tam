import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { MenuComponent } from './menu/menu.component';
import { DatatableComponent } from './datatable/datatable.component';
import { GuestComponent } from './guest/guest.component';
import { GuesttableComponent } from './guesttable/guesttable.component';
import { MenuguestComponent } from './menuguest/menuguest.component';
import { MenudataComponent } from './menudata/menudata.component';
import { PrfComponent } from './prf/prf.component';
import { SearchComponent } from './search/search.component';
import { NewguestComponent } from './newguest/newguest.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataComponent,
    MenuComponent,
    DatatableComponent,
    GuestComponent,
    GuesttableComponent,
    MenuguestComponent,
    MenudataComponent,
    PrfComponent,
    SearchComponent,
    NewguestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
