import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LayoutService } from './services/layout/layout.service';
import { ThemesService } from './services/layout/themes.service';
import { MenuService } from './services/layout/menu.service';
import { UserService } from './services/user.service';
import { AppService } from './services/app.service';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
    ],
    providers: [
        LayoutService,
        ThemesService,
        MenuService,
        UserService,
        AppService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
