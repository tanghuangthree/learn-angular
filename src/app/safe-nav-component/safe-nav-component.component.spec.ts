import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeNavComponentComponent } from './safe-nav-component.component';

describe('SafeNavComponentComponent', () => {
  let component: SafeNavComponentComponent;
  let fixture: ComponentFixture<SafeNavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeNavComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
