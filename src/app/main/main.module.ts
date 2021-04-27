import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'sign-up', component:SignUpComponent },
  {path:'forgot', component:ForgotComponent },
  {path:'', component:LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
