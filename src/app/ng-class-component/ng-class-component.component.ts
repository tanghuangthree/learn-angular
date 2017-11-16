import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-class-component',
  templateUrl: './ng-class-component.component.html',
  styleUrls: ['./ng-class-component.component.scss']
})
export class NgClassComponentComponent implements OnInit {
  private title: string;
  private currentClasses: any;
  private isSize: boolean;
  private isWeight: boolean;
  private isColor: boolean;
  constructor() { }

  ngOnInit() {
    this.title = 'ngClass的用法';
    this.isSize = true;
    this.isWeight = true;
    this.isColor = true;
  }

  public setCurrentClasses(): void {
    this.currentClasses = {
      'myp-size': this.isSize,
      'myp-weight': this.isWeight,
      'mgp-color': this.isColor
    }
  }
}
