import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style-component',
  templateUrl: './ng-style-component.component.html',
  styleUrls: ['./ng-style-component.component.scss']
})
export class NgStyleComponentComponent implements OnInit {
  private title: string;
  private currentNgStyle: any;
  constructor() { }

  ngOnInit() {
    this.title = 'ngStyle的用法';
  }

  public setCurrentNgStyle(): void {
    this.currentNgStyle = {
      'font-size': '18px',
      'font-weight': 'bold',
      'color': 'red',
    }
  }

}
