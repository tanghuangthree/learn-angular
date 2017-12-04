import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
 /*  @ContentChild(ChildTwoComponent)
  childTwo:ChildTwoComponent; */
  @ContentChildren(ChildTwoComponent)
  contentChildren:QueryList<ChildTwoComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // console.log(this.childTwo);
    this.contentChildren.forEach(element => {
      console.log(element);
    });
  }

}
