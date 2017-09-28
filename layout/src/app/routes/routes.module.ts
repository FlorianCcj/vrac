import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuService } from '../core/services/layout/menu.service';
import { SharedModule } from '../shared/shared.module';

import { menu } from './menu';
import { routes } from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(private menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
