import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'for-got', component: ForgotComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent,
    ForgotComponent
  ],
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
