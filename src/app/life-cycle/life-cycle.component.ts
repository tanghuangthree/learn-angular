import { Component, OnInit, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit {
  @Input()
  private title: string;

  private logs: Array<string> = [];
  constructor() {
    this.logs.push("...constructor"+new Date().getTime());
   }

  ngOnInit() {
    this.logs.push("...ngOnInit"+new Date().getTime());
  }
  
  ngOnChanges() {
    this.logs.push("...ngOnChanges"+new Date().getTime());
  }

  ngDoCheck() {
    this.logs.push("...ngDoCheck"+new Date().getTime());
  }

  ngOnDestory() {
    this.logs.push("...ngOnDestory"+new Date().getTime());
  }

  ngAfterViewInit() {
    this.logs.push("...ngAfterViewInit"+new Date().getTime());
  }

  ngAfterViewChecked() {
    this.logs.push("...ngAfterViewChecked"+new Date().getTime());
  }

  ngAfterContentInit() {
    this.logs.push("...ngAfterContentInit"+new Date().getTime());
  }

  ngAfterContentChecked() {
    this.logs.push("...ngAfterContentChecked"+new Date().getTime());
  }


}
