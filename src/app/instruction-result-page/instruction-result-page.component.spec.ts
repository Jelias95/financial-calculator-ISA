import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionResultPageComponent } from './instruction-result-page.component';

describe('InstructionResultPageComponent', () => {
  let component: InstructionResultPageComponent;
  let fixture: ComponentFixture<InstructionResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
