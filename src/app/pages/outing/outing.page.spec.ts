import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingPage } from './outing.page';

describe('OutingPage', () => {
  let component: OutingPage;
  let fixture: ComponentFixture<OutingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
