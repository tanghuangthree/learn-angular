import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterpolationComponentComponent } from './interpolation-component/interpolation-component.component';
import { RefVarComponentComponent } from './ref-var-component/ref-var-component.component';
import { ValueBindComponentComponent } from './value-bind-component/value-bind-component.component';
import { TwoWayBindComponentComponent } from './two-way-bind-component/two-way-bind-component.component';
import { FontResizeComponentComponent } from './two-way-bind-component/font-resize-component/font-resize-component.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { NgSwitchComponentComponent } from './ng-switch-component/ng-switch-component.component';
import { NgClassComponentComponent } from './ng-class-component/ng-class-component.component';
import { NgStyleComponentComponent } from './ng-style-component/ng-style-component.component';
import { NgModelComponentComponent } from './ng-model-component/ng-model-component.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { SafeNavComponentComponent } from './safe-nav-component/safe-nav-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponentComponent,
    RefVarComponentComponent,
    ValueBindComponentComponent,
    TwoWayBindComponentComponent,
    FontResizeComponentComponent,
    NgIfComponentComponent,
    NgForComponentComponent,
    NgSwitchComponentComponent,
    NgClassComponentComponent,
    NgStyleComponentComponent,
    NgModelComponentComponent,
    PipeComponentComponent,
    SafeNavComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
