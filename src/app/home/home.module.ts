import { homeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
