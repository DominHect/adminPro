import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', keywords: 'angular page Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress Bars', keywords: 'angular page Progress' } },
            { path: 'graficas1', component: Graficas1Component , data: { titulo: 'Gráficas', keywords: 'angular page Gráficas' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Temas', keywords: 'angular page Ajustes' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', keywords: 'angular page ' } },
            { path: 'observables', component: RxjsComponent, data: { titulo: 'Promesas y Observables', keywords: 'angular page Promesas' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
