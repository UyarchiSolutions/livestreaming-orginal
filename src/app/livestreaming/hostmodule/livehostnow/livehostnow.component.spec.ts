import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivehostnowComponent } from './livehostnow.component';

describe('LivehostnowComponent', () => {
  let component: LivehostnowComponent;
  let fixture: ComponentFixture<LivehostnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivehostnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivehostnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
