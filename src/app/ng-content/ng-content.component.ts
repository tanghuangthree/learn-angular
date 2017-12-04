import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSomething():void {
    alert("子组件派发事件。。。");
  }
}
