# ZcLib

## Component

### ZcCountdown

```
<app-zc-countdown
  [width]="100"
  [customRemainingCallback]="customRemainFn"
  [clickCallback]="onClickFn"
></app-zc-countdown>
```


```
customRemainFn = (s: number) => {
  return '还剩' + s + '秒';
}

onClickFn = (disabled: boolean) => {
  if (disabled) {
    alert('等会再发，直到不？');
    return 0;
  } else {
    return (new Date()).getTime() + 10000;
  }
}
```


```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZcCountdownModule } from 'zc-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZcCountdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```