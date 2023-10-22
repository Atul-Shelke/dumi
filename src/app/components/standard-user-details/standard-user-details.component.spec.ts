import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUserDetailsComponent } from './standard-user-details.component';

describe('StandardUserDetailsComponent', () => {
  let component: StandardUserDetailsComponent;
  let fixture: ComponentFixture<StandardUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
