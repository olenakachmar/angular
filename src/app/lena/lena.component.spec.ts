import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenaComponent } from './lena.component';

describe('LenaComponent', () => {
  let component: LenaComponent;
  let fixture: ComponentFixture<LenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
