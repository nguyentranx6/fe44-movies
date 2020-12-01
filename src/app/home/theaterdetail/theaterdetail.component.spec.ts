import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterdetailComponent } from './theaterdetail.component';

describe('TheaterdetailComponent', () => {
  let component: TheaterdetailComponent;
  let fixture: ComponentFixture<TheaterdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
