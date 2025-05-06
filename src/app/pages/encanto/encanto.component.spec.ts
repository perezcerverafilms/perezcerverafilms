import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncantoComponent } from './encanto.component';

describe('EncantoComponent', () => {
  let component: EncantoComponent;
  let fixture: ComponentFixture<EncantoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncantoComponent]
    });
    fixture = TestBed.createComponent(EncantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
