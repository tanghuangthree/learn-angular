import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.scss']
})
export class BrotherComponent implements OnInit {
  private title: string;
  constructor() { }

  ngOnInit() {
    this.title = '第二种：不是父子关系的组件之间的通讯';
  }

}
