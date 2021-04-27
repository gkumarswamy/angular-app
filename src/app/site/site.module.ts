import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ContactusComponent } from './contactus/contactus.component';


import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'about-us', component:AboutComponent },
  {path:'conatct-us', component:ContactusComponent },
  {path:'clients', component:ClientComponent },
  {path:'**', component:ClientComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ClientComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SiteModule { }
