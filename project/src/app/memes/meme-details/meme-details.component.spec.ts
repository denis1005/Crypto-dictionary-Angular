import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeDetailsComponent } from './meme-details.component';

describe('MemeDetailsComponent', () => {
  let component: MemeDetailsComponent;
  let fixture: ComponentFixture<MemeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
