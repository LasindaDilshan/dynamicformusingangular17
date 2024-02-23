import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdlabelComponent } from './ldlabel.component';

describe('LdlabelComponent', () => {
  let component: LdlabelComponent;
  let fixture: ComponentFixture<LdlabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdlabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LdlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
