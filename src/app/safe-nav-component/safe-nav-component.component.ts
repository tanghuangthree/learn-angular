import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'safe-nav-component',
  templateUrl: './safe-nav-component.component.html',
  styleUrls: ['./safe-nav-component.component.scss']
})
export class SafeNavComponentComponent implements OnInit {
  private currentData: any;
  private title: string;
  constructor() { }

  ngOnInit() {
    this.currentData = null;
    this.title = '安全取值';
  }

}
