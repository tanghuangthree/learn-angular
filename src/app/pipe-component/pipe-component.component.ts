import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.scss']
})
export class PipeComponentComponent implements OnInit {
  private currentDate: any;
  private title: string;
  constructor() { }

  ngOnInit() {
    setInterval(
      ()=>{
      this.currentDate = new Date();
    },1000);
    this.title = '管道的用法';
  }

}
