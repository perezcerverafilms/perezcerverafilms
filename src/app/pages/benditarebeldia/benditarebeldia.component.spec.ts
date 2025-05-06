import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenditarebeldiaComponent } from './benditarebeldia.component';

describe('BenditarebeldiaComponent', () => {
  let component: BenditarebeldiaComponent;
  let fixture: ComponentFixture<BenditarebeldiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenditarebeldiaComponent]
    });
    fixture = TestBed.createComponent(BenditarebeldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
