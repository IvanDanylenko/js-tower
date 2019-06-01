import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionallyComponent } from './additionally.component';

describe('AdditionallyComponent', () => {
  let component: AdditionallyComponent;
  let fixture: ComponentFixture<AdditionallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
