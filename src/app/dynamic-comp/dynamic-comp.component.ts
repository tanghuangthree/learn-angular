import { Component, OnInit,ViewChild,ViewContainerRef,ComponentRef,ComponentFactoryResolver } from '@angular/core';
import { Child11Component } from './child11/child11.component';

@Component({
  selector: 'dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit {
  @ViewChild('dycomp',{read:ViewContainerRef})
  dycomp:ViewContainerRef;

  dycomp1:ComponentRef<Child11Component>;
  dycomp2:ComponentRef<Child11Component>;

  constructor(private resolver:ComponentFactoryResolver) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit...动态创建组件");
    /* // ComponentFactoryResolver 组件工厂构造器 
    // resolveComponentFactory 方法传人Component参数，返回ComponentFactory对象
    const childFactory = this.resolver.resolveComponentFactory(Child11Component);
    this.dycomp1 = this.dycomp.createComponent(childFactory);

    // ViewContainerRef   是ViewChild的一个容器 
    // createCompoent 方法 第二个参数是组件渲染顺序
    this.dycomp2 = this.dycomp.createComponent(childFactory,0);
    this.dycomp2.instance.title = "第一个子组件标题"; */
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit...动态创建组件");
    // ComponentFactoryResolver 组件工厂构造器 
    // resolveComponentFactory 方法传人Component参数，返回ComponentFactory对象
    const childFactory = this.resolver.resolveComponentFactory(Child11Component);
    this.dycomp1 = this.dycomp.createComponent(childFactory);
    // ViewContainerRef   是ViewChild的一个容器 
    // createCompoent 方法 第二个参数是组件渲染顺序
    this.dycomp2 = this.dycomp.createComponent(childFactory,0);
    this.dycomp2.instance.title = "第一个子组件标题";
    this.dycomp2.instance.btnClick.subscribe(param=>{
      console.log(param);
    });
  }

  destroyChild(): void {
      this.dycomp1.destroy();
      this.dycomp2.destroy();
    }

}
