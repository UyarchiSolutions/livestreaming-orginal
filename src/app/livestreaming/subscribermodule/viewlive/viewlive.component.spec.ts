import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewliveComponent } from './viewlive.component';

describe('ViewliveComponent', () => {
  let component: ViewliveComponent;
  let fixture: ComponentFixture<ViewliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
