import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if-component',
  templateUrl: './ng-if-component.component.html',
  styleUrls: ['./ng-if-component.component.scss']
})
export class NgIfComponentComponent implements OnInit {
  private title: string ;
  private flag:boolean;
  constructor() { }

  ngOnInit() {
    this.title = 'ngIf的用法';
    this.flag = true;
  }

  public isShow(): void {
    if(this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

}
