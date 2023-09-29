import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingliveComponent } from './testinglive.component';

describe('TestingliveComponent', () => {
  let component: TestingliveComponent;
  let fixture: ComponentFixture<TestingliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
