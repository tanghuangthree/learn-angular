import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationComponentComponent } from './interpolation-component.component';

describe('InterpolationComponentComponent', () => {
  let component: InterpolationComponentComponent;
  let fixture: ComponentFixture<InterpolationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
