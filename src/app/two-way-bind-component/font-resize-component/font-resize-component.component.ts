import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'font-resize-component',
  templateUrl: './font-resize-component.component.html',
  styleUrls: ['./font-resize-component.component.scss']
})
export class FontResizeComponentComponent implements OnInit {
  private title: string;
  @Input() size: number;
  @Output() changeSize = new EventEmitter<number>();
  constructor() { }

  public dec() {
    this.resize(-1);
  }

  public inc() {
    this.resize(+1);
  }
  public resize(detal: number) {
    this.size = Math.min(40,Math.max(8,this.size + detal));
    this.changeSize.emit(this.size);
  }
  ngOnInit() {
    this.title = '子组件';
  }

}
