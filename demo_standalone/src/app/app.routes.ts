import { Routes } from '@angular/router';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartPageComponent
    },
    {
        path: 'template-syntax',
        component: TemplateSyntaxComponent
    },
    {
        path: '**',
        component: DefaultPageComponent
    }
];
