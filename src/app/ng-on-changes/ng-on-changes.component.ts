import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss']
})
export class NgOnChangesComponent implements OnInit {
  private title: string;
  private userName: string;
  private userObj: any;
  constructor() { }

  ngOnInit() {
    this.title = '父组件';
    this.userName = '默认用户1';
    this.userObj = {userName:'默认用户2'};
  }

}
