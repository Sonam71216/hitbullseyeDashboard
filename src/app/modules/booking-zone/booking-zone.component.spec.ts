import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingZoneComponent } from './booking-zone.component';

describe('BookingZoneComponent', () => {
  let component: BookingZoneComponent;
  let fixture: ComponentFixture<BookingZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
