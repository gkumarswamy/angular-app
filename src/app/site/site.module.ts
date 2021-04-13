import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ClientComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SiteModule { }
