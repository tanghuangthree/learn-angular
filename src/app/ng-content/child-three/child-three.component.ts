import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  @Output()
  myevent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sayHello():void {
    this.myevent.emit();
  }

}
