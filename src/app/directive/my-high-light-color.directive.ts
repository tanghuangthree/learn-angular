import { Directive, Input, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighLightColor]'
})
export class MyHighLightColorDirective {
  @Input()
  highLightColor:string;

  constructor(private el:ElementRef) {
    /* console.log(el);
    el.nativeElement.style.backgroundColor = '#ff3300'; */
   }

  @HostBinding('class')
  myClass:string;

  @HostListener('mouseenter')  onMouseEnter() {
    this.highLight(this.highLightColor);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.highLight(null);
  }

  private highLight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click') onclick() {
    if(this.myClass) {
      this.myClass = '';
    }else {
      this.myClass = 'my-border';
    }
  }




}
