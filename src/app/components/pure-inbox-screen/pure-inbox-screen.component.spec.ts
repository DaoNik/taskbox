import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PureInboxScreenComponent} from './pure-inbox-screen.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('PureInboxScreenComponent', () => {
  let component: PureInboxScreenComponent;
  let fixture: ComponentFixture<PureInboxScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PureInboxScreenComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(PureInboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
