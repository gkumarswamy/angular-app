import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formObj:any ={name:"", username:"", password:""};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onInsertEmployee(){
    const url = 'http://localhost:3000/employee';
    const data = this.formObj;
    this.http.post(url, data).subscribe((res)=>{
      console.log(res,'res');
    })
  }
  
  onClickButton() {
    this.onInsertEmployee();
    console.log(this.formObj.username, this.formObj.password);
  }

}
