import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string='Login';
  constructor() { }

  ngOnInit(): void {
    console.log('Lgom-oninit');
  }

  onSubmit(){
    console.log('login page..');
  }

}
