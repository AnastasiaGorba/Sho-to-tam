import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { GuestComponent } from './guest/guest.component';
import { PrhComponent } from './prh/prh.component';
import { SearchComponent } from './search/search.component';
import { NewguestComponent } from './newguest/newguest.component';
import { SignComponent } from './sign/sign.component';  
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: "", redirectTo: "/sign", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "data", component: DataComponent},
  {path: "guest", component: GuestComponent},
  {path: "prh", component: PrhComponent},
  {path: "search", component: SearchComponent},
  {path: "newguest", component: NewguestComponent},
  {path: "sign", component: SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
