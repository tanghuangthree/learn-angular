import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  private title: string;
  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.title = '第一组件';
  }

  public emitAnEvent($event): void {
    this.eventBusService.eventBus.next("第一个组件触发的事件："+new Date());
  }

}
