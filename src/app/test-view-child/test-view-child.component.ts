import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit {
  // @ViewChild(ChildOneComponent)
  // childOne:ChildOneComponent;
  @ViewChildren(ChildOneComponent)
  children:QueryList<ChildOneComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* console.log(this.childOne.title);
    this.childOne.helloEvent.subscribe((param)=>{
      console.log("event:",this.childOne.title);
      console.log("param:",param);
    }); */

    this.children.forEach(element => {
      element.helloEvent.subscribe(data => {
        console.log(data);
      });
    });

  }

}
