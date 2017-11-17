import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {
  private title: string;
  constructor() { }

  ngOnInit() {
    this.title = '第三种：使用localStorage来使组件之间通讯';
  }

}
