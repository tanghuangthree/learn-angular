import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.scss']
})
export class Child11Component implements OnInit {
  private time: string = new Date().toLocaleString();
  constructor() { }

  ngOnInit() {
  }

  setTime(time: string): void {
    this.time = time;
  }

  ngAfterViewInit() {
    console.log("1号组件ngAfterViewInit....");
  }

  ngAfterViewChecked() {
    console.log('1号组件ngAfterViewChecked....');
  }
}
