import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThefireescapeComponent } from './thefireescape.component';

describe('ThefireescapeComponent', () => {
  let component: ThefireescapeComponent;
  let fixture: ComponentFixture<ThefireescapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThefireescapeComponent]
    });
    fixture = TestBed.createComponent(ThefireescapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
