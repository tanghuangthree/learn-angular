import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animation/fly-in.service';

@Component({
  selector: 'test-fly-in',
  templateUrl: './test-fly-in.component.html',
  styleUrls: ['./test-fly-in.component.scss'],
  animations: [flyIn]
})
export class TestFlyInComponent implements OnInit {
  state:string;
  constructor() { }

  ngOnInit() {
  }

}
