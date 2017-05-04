import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapuiComponent } from './soapui.component';

describe('SoapuiComponent', () => {
  let component: SoapuiComponent;
  let fixture: ComponentFixture<SoapuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
