import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoconbancolombiaComponent } from './comoconbancolombia.component';

describe('ComoconbancolombiaComponent', () => {
  let component: ComoconbancolombiaComponent;
  let fixture: ComponentFixture<ComoconbancolombiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoconbancolombiaComponent]
    });
    fixture = TestBed.createComponent(ComoconbancolombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
