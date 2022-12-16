import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrederComponent } from './cancel-oreder.component';

describe('CancelOrederComponent', () => {
  let component: CancelOrederComponent;
  let fixture: ComponentFixture<CancelOrederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelOrederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelOrederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
