import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreecertificateComponent } from './degreecertificate.component';

describe('DegreecertificateComponent', () => {
  let component: DegreecertificateComponent;
  let fixture: ComponentFixture<DegreecertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreecertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
