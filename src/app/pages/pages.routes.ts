import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { Graficas1Component } from "../pages/graficas1/graficas1.component";
import { ProgressComponent } from '../pages/progress/progress.component';


const PagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
]
export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );