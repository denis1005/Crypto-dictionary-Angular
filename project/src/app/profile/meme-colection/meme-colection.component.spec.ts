import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeColectionComponent } from './meme-colection.component';

describe('MemeColectionComponent', () => {
  let component: MemeColectionComponent;
  let fixture: ComponentFixture<MemeColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeColectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
