import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefVarComponentComponent } from './ref-var-component.component';

describe('RefVarComponentComponent', () => {
  let component: RefVarComponentComponent;
  let fixture: ComponentFixture<RefVarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefVarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefVarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
