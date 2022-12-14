import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMemeComponent } from './delete-meme.component';

describe('DeleteMemeComponent', () => {
  let component: DeleteMemeComponent;
  let fixture: ComponentFixture<DeleteMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
