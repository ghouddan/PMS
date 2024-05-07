import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinesComponent } from './usines.component';

describe('UsinesComponent', () => {
  let component: UsinesComponent;
  let fixture: ComponentFixture<UsinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
