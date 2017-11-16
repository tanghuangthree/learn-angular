import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-model-component',
  templateUrl: './ng-model-component.component.html',
  styleUrls: ['./ng-model-component.component.scss']
})
export class NgModelComponentComponent implements OnInit {
  private title: string;
  private currentData: any;
  constructor() { }

  ngOnInit() {
    this.currentData = {name:'学习使我快乐'}
    this.title = 'ngModule的用法';
  }

}
