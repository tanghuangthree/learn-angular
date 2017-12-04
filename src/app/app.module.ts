import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    TestNgContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
