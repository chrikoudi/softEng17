import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypointsComponent } from './buypoints.component';

describe('BuypointsComponent', () => {
  let component: BuypointsComponent;
  let fixture: ComponentFixture<BuypointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuypointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuypointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
