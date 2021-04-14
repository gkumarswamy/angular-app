import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ClientComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SiteModule { }
