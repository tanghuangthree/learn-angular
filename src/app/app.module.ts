import { Child3Component } from './local-storage/child3/child3.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAndChildComponentComponent } from './parent-and-child-component/parent-and-child-component.component';
import { ChildComponent } from './parent-and-child-component/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child1/child1.component';
import { Child2Component } from './brother/child2/child2.component';
import { EventBusService } from './brother/event-bus.service';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { Child4Component } from './local-storage/child4/child4.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponentComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    LocalStorageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
