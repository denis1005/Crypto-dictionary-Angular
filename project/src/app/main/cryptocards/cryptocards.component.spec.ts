import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocardsComponent } from './cryptocards.component';

describe('CryptocardsComponent', () => {
  let component: CryptocardsComponent;
  let fixture: ComponentFixture<CryptocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
