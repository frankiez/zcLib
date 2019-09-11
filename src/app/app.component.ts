import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'zcLib';

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
}
