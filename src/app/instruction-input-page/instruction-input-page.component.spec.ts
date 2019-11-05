import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInstructionPageComponent } from './instruction-input-page.component';

describe('InputInstructionPageComponent', () => {
  let component: InputInstructionPageComponent;
  let fixture: ComponentFixture<InputInstructionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInstructionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInstructionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
