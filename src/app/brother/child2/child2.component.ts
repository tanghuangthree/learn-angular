import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  private title: string;
  private events: Array<any> = [];
  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.title = '第二个组件';
    this.eventBusService.eventBus.subscribe((value)=>{
      this.events.push(value);
    });
  }

}
