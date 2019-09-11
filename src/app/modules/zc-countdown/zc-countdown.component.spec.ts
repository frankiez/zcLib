import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcCountdownComponent } from './zc-countdown.component';

describe('ZcCountdownComponent', () => {
  let component: ZcCountdownComponent;
  let fixture: ComponentFixture<ZcCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
