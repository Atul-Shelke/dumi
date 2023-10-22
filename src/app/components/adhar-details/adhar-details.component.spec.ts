import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharDetailsComponent } from './adhar-details.component';

describe('AdharDetailsComponent', () => {
  let component: AdharDetailsComponent;
  let fixture: ComponentFixture<AdharDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdharDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdharDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
