import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shadow-dom-mode',
  encapsulation: ViewEncapsulation.Native, // s使用shadow模式渲染组件，使封装性更好。
  templateUrl: './shadow-dom-mode.component.html',
  styleUrls: ['./shadow-dom-mode.component.scss']
})
export class ShadowDomModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
