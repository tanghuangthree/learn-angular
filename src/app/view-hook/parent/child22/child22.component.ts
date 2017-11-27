import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.scss']
})
export class Child22Component implements OnInit {
  private time: string = new Date().toLocaleString();
  constructor() { }

  ngOnInit() {
  }

  setTime(time: string): void {
    this.time = time;
  }

  ngAfterViewInit() {
    console.log("2号组件ngAfterViewInit....");
  }

  ngAfterViewChecked() {
    console.log('2号组件ngAfterViewChecked....');
  }

}
