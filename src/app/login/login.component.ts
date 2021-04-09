import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formObj:any ={username:"", password:""};

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    console.log(this.formObj.username, this.formObj.password);
  }

}
