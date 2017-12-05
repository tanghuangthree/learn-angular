import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.scss']
})
export class Child11Component implements OnInit {
  @Input()
  title:string = '默认标题';
  @Output()
  btnClick:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  triggerEvent():void {
    this.btnClick.emit("子组件点击事件触发后传的值。。。");
  }

}
