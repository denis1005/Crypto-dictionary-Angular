import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactComponentComponent } from './fact-component.component';

describe('FactComponentComponent', () => {
  let component: FactComponentComponent;
  let fixture: ComponentFixture<FactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
