import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolGridComponent } from './tool-grid.component';

describe('ToolGridComponent', () => {
  let component: ToolGridComponent;
  let fixture: ComponentFixture<ToolGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
