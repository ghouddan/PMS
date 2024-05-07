import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundAdvanceBarComponent } from './round-advance-bar.component';

describe('RoundAdvanceBarComponent', () => {
  let component: RoundAdvanceBarComponent;
  let fixture: ComponentFixture<RoundAdvanceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundAdvanceBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundAdvanceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
