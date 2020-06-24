import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingrequestPage } from './outingrequest.page';

describe('OutingrequestPage', () => {
  let component: OutingrequestPage;
  let fixture: ComponentFixture<OutingrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingrequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
