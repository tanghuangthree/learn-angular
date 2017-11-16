import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelComponentComponent } from './ng-model-component.component';

describe('NgModelComponentComponent', () => {
  let component: NgModelComponentComponent;
  let fixture: ComponentFixture<NgModelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
