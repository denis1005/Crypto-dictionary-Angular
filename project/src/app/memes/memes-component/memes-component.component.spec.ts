import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesComponentComponent } from './memes-component.component';

describe('MemesComponentComponent', () => {
  let component: MemesComponentComponent;
  let fixture: ComponentFixture<MemesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
