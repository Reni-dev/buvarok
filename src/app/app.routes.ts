import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Diver } from './diver/diver';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "diver", component: Diver},
    {path: "about", component: About},
];
