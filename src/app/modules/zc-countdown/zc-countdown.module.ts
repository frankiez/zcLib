import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZcCountdownComponent } from './zc-countdown.component';


@NgModule({
  declarations: [
    ZcCountdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZcCountdownComponent
  ]
})
export class ZcCountdownModule { }
