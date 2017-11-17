import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'parent-and-child-component',
  templateUrl: './parent-and-child-component.component.html',
  styleUrls: ['./parent-and-child-component.component.scss']
})
export class ParentAndChildComponentComponent implements OnInit {
  @ViewChild(ChildComponent)
  private child: ChildComponent;

  private title: string;
  constructor() { }

  ngOnInit() {
    this.title = '第一种：父子之间的通讯';
  }

  ngAfterViewInit() {
   // this.child.childFu();
  }r

  public doSomething(): void {
    alert('收到子组件自定义的事件');
  }
}
