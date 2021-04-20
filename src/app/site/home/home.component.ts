import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name : string = 'hello! hi .. gm';
  x: string;
  count:number = 100;
  y1: Array<string> = ['kumar','demo'];
  y2: Array<number> = [2,4];
  y3: Array<any> = [{'name':'kumar'},{'name':'bharatha'}];
  y4: Array<any> = [['name','phone'],['name1','phone1']];

  constructor() { }

  ngOnInit(): void {
    console.log(this.x,'this.x')
    this.getName('demo');
  }

  getName(name) {
    this.x = 'demo-x';
    let x = 'demo-z'
    console.log(this.name, name, x);  
  }

  onHelloFun(){
    this.x = 'x-helooo called';
  }
  
  onTextChange(){
    // this.count = this.count - 1;
    this.count--;
  }
}
