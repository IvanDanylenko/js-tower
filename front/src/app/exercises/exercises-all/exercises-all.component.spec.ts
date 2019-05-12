import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesAllComponent } from './exercises-all.component';

describe('ExercisesAllComponent', () => {
  let component: ExercisesAllComponent;
  let fixture: ComponentFixture<ExercisesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
