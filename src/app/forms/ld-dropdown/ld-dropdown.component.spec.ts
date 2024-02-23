import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdDropdownComponent } from './ld-dropdown.component';

describe('LdDropdownComponent', () => {
  let component: LdDropdownComponent;
  let fixture: ComponentFixture<LdDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
