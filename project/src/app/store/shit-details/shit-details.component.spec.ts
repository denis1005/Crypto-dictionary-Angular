import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitDetailsComponent } from './shit-details.component';

describe('ShitDetailsComponent', () => {
  let component: ShitDetailsComponent;
  let fixture: ComponentFixture<ShitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
