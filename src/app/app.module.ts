import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZcCountdownModule } from './modules/zc-countdown/zc-countdown.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ZcCountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
