import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdInputComponent } from './ld-input.component';

describe('LdInputComponent', () => {
  let component: LdInputComponent;
  let fixture: ComponentFixture<LdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
