import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompontentsComponent } from './compontents.component';

describe('CompontentsComponent', () => {
  let component: CompontentsComponent;
  let fixture: ComponentFixture<CompontentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompontentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
