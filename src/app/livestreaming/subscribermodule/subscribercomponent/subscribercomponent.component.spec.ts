import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribercomponentComponent } from './subscribercomponent.component';

describe('SubscribercomponentComponent', () => {
  let component: SubscribercomponentComponent;
  let fixture: ComponentFixture<SubscribercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
