import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const MATERIAL_MODULES = [
	MatButtonModule,
	MatCheckboxModule
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
