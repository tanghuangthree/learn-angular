import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input()
  highlightColor:string;

  private elContainer:any;
  constructor(private el:ElementRef) { }

  ngOnInit() {
    console.log(this.el);
    console.log(this.el.nativeElement.childNodes);
    console.log(this.el.nativeElement.childNodes[0]);
    console.log(this.el.nativeElement.childNodes[0].innerHTML);
    console.log(this.el.nativeElement.innerHTML);
    this.elContainer = this.el.nativeElement.childNodes[0];
    console.log(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlightColor);
  }

  private setColor(color:string) {
    this.elContainer.style.backgroundColor = color;
  }

}
