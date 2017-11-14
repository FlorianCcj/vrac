import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatToolbarModule, MatSidenavModule
} from '@angular/material';

const MATERIAL_MODULES = [
	MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatToolbarModule, MatSidenavModule
]

@NgModule({
  imports: [
    CommonModule,
    [...MATERIAL_MODULES]
  ],
  exports: [
  	[...MATERIAL_MODULES]
  ],
  declarations: []
})
export class SharedModule { }
