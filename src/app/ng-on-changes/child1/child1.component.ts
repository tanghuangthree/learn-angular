import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { SimpleChange } from '_@angular_core@4.4.6@@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {
  private title: string;
  @Input()
  private userName: string;
  @Input()
  private userObj: any;

  private age: number = 18;
  constructor() { }

  ngOnInit() {
    this.title = '子组件';
  }

  ngDoCheck() {
   // console.log('ngDoCheck.....'+new Date().getTime());
  }

  ngOnChanges(changes: SimpleChanges) {
   // console.log('ngOnChanges.....'+new Date().getTime());
   // console.log('ngOnChanges.....'+JSON.stringify(changes,null,4));
  }

}
