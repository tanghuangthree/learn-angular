import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
  private title: string;
  constructor() { }

  ngOnInit() {
    this.title = '第一个子组件';
  }

  public writeData(): void {
    window.localStorage.setItem("json",JSON.stringify({name:'Jom',age:18}));
    alert("数据写如localStorage");
  }

}
