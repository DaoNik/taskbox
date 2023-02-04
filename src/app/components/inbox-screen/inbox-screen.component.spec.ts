import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InboxScreenComponent} from './inbox-screen.component';
import {NgxsModule, Store} from "@ngxs/store";
import {TasksState} from "../../state/task.state";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('InboxScreenComponent', () => {
  let component: InboxScreenComponent;
  let fixture: ComponentFixture<InboxScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboxScreenComponent],
      imports: [NgxsModule.forRoot([TasksState])],
      providers: [Store],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
