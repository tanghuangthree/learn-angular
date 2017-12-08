import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {

  constructor(private tf:TemplateRef<any>,private vr:ViewContainerRef) { }

  @Input() set delay(time:number) {
    setTimeout(()=>{
      this.vr.createEmbeddedView(this.tf);
    },time);
  }

}
