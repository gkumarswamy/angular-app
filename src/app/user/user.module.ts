import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    DashboradComponent,
    UserProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
