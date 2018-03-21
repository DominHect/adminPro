import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})
export class SharedModule {}