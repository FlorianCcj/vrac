import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../core/services/layout/layout.service';
import { ThemesService } from '../../core/services/layout/themes.service';

@Component({
    selector: 'app-offsidebar',
    templateUrl: './offsidebar.component.html',
    styleUrls: ['./offsidebar.component.scss']
})
export class OffsidebarComponent implements OnInit {

    currentTheme: any ;
    selectedLanguage: string;

    constructor(public settings: LayoutService, themes: ThemesService) {
        this.currentTheme = themes.getDefaultTheme();
    }

    ngOnInit() { }
}
