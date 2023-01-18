import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecmpComponent } from './homepagecmp.component';

describe('HomepagecmpComponent', () => {
  let component: HomepagecmpComponent;
  let fixture: ComponentFixture<HomepagecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagecmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
