import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';

const MATERIAL_MODULES = [
	MatButtonModule,
	MatCheckboxModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [...MATERIAL_MODULES]
  ],
  exports: [
  	[...MATERIAL_MODULES]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
