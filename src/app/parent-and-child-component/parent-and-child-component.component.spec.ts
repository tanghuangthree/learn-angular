import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAndChildComponentComponent } from './parent-and-child-component.component';

describe('ParentAndChildComponentComponent', () => {
  let component: ParentAndChildComponentComponent;
  let fixture: ComponentFixture<ParentAndChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAndChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAndChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
