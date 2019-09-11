import { Component, OnInit, Input } from '@angular/core';

// 回调函数显示自定义剩余时间
type TypeCustomRemainingCallback = null | ((sec: number) => string);
// 回调函数点击按钮
type TypeClickCallback = null | ((canClick: boolean) => number);


@Component({
  selector: 'app-zc-countdown',
  templateUrl: './zc-countdown.component.html',
  styleUrls: ['./zc-countdown.component.less']
})
export class ZcCountdownComponent implements OnInit {
  // 固定宽度
  @Input() width = null;
  // 原始的发送按钮文字
  @Input() originalText = '发送';
  // 读稍回调时自定义按钮显示内容
  @Input() customRemainingCallback: TypeCustomRemainingCallback = null;
  // 点击按钮后调用，告诉回调当前是否可点击，如果是可调用状态还需返回剩余秒数
  @Input() clickCallback: TypeClickCallback = null;
  // 间隔检测时间
  @Input() checkInterval = 200;
  // 是否可点击状态
  public disabled = false;
  // 不可点击状态下按钮文字
  public disabledText = '发送中';
  // 定时器
  private timer = null;

  constructor() {
  }

  ngOnInit() {
  }

  private showRemaining(sec: number) {
    if (!this.customRemainingCallback) {
      this.disabledText = sec + 's';
    } else {
      this.disabledText = this.customRemainingCallback(sec);
    }
  }

  private start(endTime: number) {
    const timerHandle = () => {
      const now = (new Date()).getTime();
      const remain = Math.round((endTime - now) / 1000);
      this.showRemaining(remain);
      if (remain <= 0) {
        this.disabled = false;
        clearTimeout(this.timer);
      } else {
        this.timer = setTimeout(timerHandle, this.checkInterval);
      }
    };
    timerHandle();
  }

  public async onClickHandle() {
    const ret = await this.clickCallback(this.disabled);
    if (this.disabled) {
      return;
    }
    if (this.clickCallback) {
      this.disabled = true;
      this.start(ret);
    }
  }
}
