import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSliderComponent } from './sort-slider.component';

describe('SortSliderComponent', () => {
  let component: SortSliderComponent;
  let fixture: ComponentFixture<SortSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
