import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { MenuComponent } from './menu/menu.component';
import { DatatableComponent } from './datatable/datatable.component';
import { GuestComponent } from './guest/guest.component';
import { MenuguestComponent } from './menuguest/menuguest.component';
import { MenudataComponent } from './menudata/menudata.component';
import { PrfComponent } from './prf/prf.component';
import { SearchComponent } from './search/search.component';
import { NewguestComponent } from './newguest/newguest.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'data', component: DataComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'datatable', component: DatatableComponent},
  { path: 'guest', component: GuestComponent},
  { path: 'menuguest', component: MenuguestComponent},
  { path: 'menudata', component: MenudataComponent},
  { path: 'prf', component: PrfComponent},
  { path: 'search', component: SearchComponent},
  { path: 'newguest', component: NewguestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

