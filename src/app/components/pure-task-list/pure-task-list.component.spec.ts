import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PureTaskListComponent} from './pure-task-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('TaskListComponent', () => {
  let component: PureTaskListComponent;
  let fixture: ComponentFixture<PureTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PureTaskListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
