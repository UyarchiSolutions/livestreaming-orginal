import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostcomponentComponent } from './hostcomponent.component';

describe('HostcomponentComponent', () => {
  let component: HostcomponentComponent;
  let fixture: ComponentFixture<HostcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
