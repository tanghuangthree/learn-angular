import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontResizeComponentComponent } from './font-resize-component.component';

describe('FontResizeComponentComponent', () => {
  let component: FontResizeComponentComponent;
  let fixture: ComponentFixture<FontResizeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontResizeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontResizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
