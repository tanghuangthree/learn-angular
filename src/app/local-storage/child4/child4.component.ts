import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements OnInit {
  private title: string;
  private data: any;
  constructor() { }

  ngOnInit() {
    this.title = '第二个子组件';
  }

  public readData(): void {
    let json = window.localStorage.getItem("json");
    this.data = JSON.parse(json);
  }

}
