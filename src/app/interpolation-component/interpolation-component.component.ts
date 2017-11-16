import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation-component',
  templateUrl: './interpolation-component.component.html',
  styleUrls: ['./interpolation-component.component.scss']
})
export class InterpolationComponentComponent implements OnInit {
  private title: string;

  constructor() { }

  ngOnInit() {
    this.title = '插值表达式';
  }

  public getVars():any {
    return '6666';
  }
}
