import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'emulate-mode',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './emulate-mode.component.html',
  styleUrls: ['./emulate-mode.component.scss']
})
export class EmulateModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
