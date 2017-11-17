import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  private _panelTitle: string;

  @Input()
  set panelTitle(paneltitle:string){
    this._panelTitle = '['+paneltitle+']';
  }

  get panelTitle(): string {
    return this._panelTitle;
  }

  @Output()
  private fllow = new EventEmitter<string>();

  constructor() { }

  public emitAnEvent(event): void {
    this.fllow.emit('fllow');
  }

  ngOnInit() {
  }

  public childFu(): void {
    alert("子组件的方法打印标题为："+this._panelTitle);
  }

}
