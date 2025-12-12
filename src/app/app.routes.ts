import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "home", redirectTo: "", pathMatch: "full" },
    { path: "countries", loadComponent: () => import('./components/countries/countries').then((component) => component.Countries), 
        title: 'Countries', 
        data: { countries: [
            {id: 1, name: 'France'},
            {id: 2, name: 'Germany'},
            {id: 3, name: 'Italy'}
        ]}
    }
];
