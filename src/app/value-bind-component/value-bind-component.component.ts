import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'value-bind-component',
  templateUrl: './value-bind-component.component.html',
  styleUrls: ['./value-bind-component.component.scss']
})
export class ValueBindComponentComponent implements OnInit {
  private imgString: string;
  private title: string;
  constructor() { }

  ngOnInit() {
    this.imgString = './../../assets/images/1.jpg';
    this.title = '单向数据绑定';
  }

  public changeImg(): void {
    if(Math.ceil(Math.random()*10000)%2) {
      this.imgString = './../../assets/images/1.jpg';
    } else {
      this.imgString = './../../assets/images/2.jpg';
    }
  }

}
