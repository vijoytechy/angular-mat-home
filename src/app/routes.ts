import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RequestFormComponent } from './request-form/request-form.component';


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    },
    {
        path: 'request',
        component: RequestFormComponent,
        title: 'Request Form'
    }
];

export default routeConfig;