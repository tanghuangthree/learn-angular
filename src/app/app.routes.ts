import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { HomeComponent } from './home/home.component';


export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'jokes',
        component: JokesComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];