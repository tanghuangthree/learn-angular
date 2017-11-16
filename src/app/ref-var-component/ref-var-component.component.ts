import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ref-var-component',
  templateUrl: './ref-var-component.component.html',
  styleUrls: ['./ref-var-component.component.scss']
})
export class RefVarComponentComponent implements OnInit {
  private title: string;
  constructor() { }

  ngOnInit() {
    this.title = '局部变量';
  }

  public sayHello(hi): void {
    alert(hi);
  } 

}
