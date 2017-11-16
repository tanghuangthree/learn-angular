import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-bind-component',
  templateUrl: './two-way-bind-component.component.html',
  styleUrls: ['./two-way-bind-component.component.scss']
})
export class TwoWayBindComponentComponent implements OnInit {
  private title: string;
  public fontSize: number = 14;
  constructor() { }

  ngOnInit() {
    this.title = '双向数据绑定';
  }

}
