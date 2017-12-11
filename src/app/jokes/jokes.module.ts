import { JokesComponent } from './jokes.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { jokesRoutes } from './jokes.routes';

@NgModule({
  imports: [
    RouterModule.forChild(jokesRoutes)
  ],
  declarations: [JokesComponent]
})
export class JokesModule { }
