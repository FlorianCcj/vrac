import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreStoreModule } from './core-store.module';

@NgModule({
  imports: [
    CommonModule,
    CoreStoreModule
  ],
  declarations: [],
  exports: [
    CoreStoreModule
  ]
})
export class CoreModule { }
