import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlieComponent } from './charlie.component';

describe('CharlieComponent', () => {
  let component: CharlieComponent;
  let fixture: ComponentFixture<CharlieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharlieComponent]
    });
    fixture = TestBed.createComponent(CharlieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
