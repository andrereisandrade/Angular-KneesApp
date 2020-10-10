import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefleshTokenComponent } from './reflesh-token.component';

describe('RefleshTokenComponent', () => {
  let component: RefleshTokenComponent;
  let fixture: ComponentFixture<RefleshTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefleshTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefleshTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
