import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch-component',
  templateUrl: './ng-switch-component.component.html',
  styleUrls: ['./ng-switch-component.component.scss']
})
export class NgSwitchComponentComponent implements OnInit {
  private title: string;
  private mapStatus: number;
  constructor() { }

  ngOnInit() {
    this.title = 'ngSwitch的用法';
    this.mapStatus = 2;
  }

}
