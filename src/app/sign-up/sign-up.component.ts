import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formObj:any ={name:"", username:"", password:""};

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showSuccess(data) {
    this.toastr.success(data, 'Toastr fun!');
  }
  
  showError(data) {
    this.toastr.error(data, 'Toastr fun!');
  }

  onInsertEmployee(){
    const url = 'http://localhost:3000/employee';
    const data = this.formObj;
    this.http.post(url, data).subscribe((res)=>{
      console.log(res,'res');
    })
  }
  
  onClickButton() {
    if(!this.formObj.name){
      this.showError("Name is required");
    } else if(!this.formObj.username){
      this.showError("Username is required");
    } else if(!this.formObj.password){
      this.showError("Password is required");
    } else {
      this.onInsertEmployee();
      console.log(this.formObj.username, this.formObj.password);
    }
  }

}
