import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponentComponent } from './store-component.component';

describe('StoreComponentComponent', () => {
  let component: StoreComponentComponent;
  let fixture: ComponentFixture<StoreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
