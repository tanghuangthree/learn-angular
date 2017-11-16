import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.scss']
})
export class NgForComponentComponent implements OnInit {
  private title: string;
  private mans: Array<any>;
  constructor() { }

  ngOnInit() {
    this.title = 'ngFor的用法';
    this.mans = [
      {name:'人族'},
      {name:'虫族'},
      {name:'神族'}
    ];
  }

}
