import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionSetListingPageComponent } from './instruction-set-listing-page.component';

describe('InstructionSetListingPageComponent', () => {
  let component: InstructionSetListingPageComponent;
  let fixture: ComponentFixture<InstructionSetListingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionSetListingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionSetListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
