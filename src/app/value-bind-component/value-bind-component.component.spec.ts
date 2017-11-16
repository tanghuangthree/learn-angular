import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBindComponentComponent } from './value-bind-component.component';

describe('ValueBindComponentComponent', () => {
  let component: ValueBindComponentComponent;
  let fixture: ComponentFixture<ValueBindComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueBindComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueBindComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
