import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletingReturnComponent } from './deleting-return.component';

describe('DeletingReturnComponent', () => {
  let component: DeletingReturnComponent;
  let fixture: ComponentFixture<DeletingReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletingReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletingReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
