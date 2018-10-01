import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisiteBassinComponent } from './form-visite-bassin.component';

describe('FormVisiteBassinComponent', () => {
  let component: FormVisiteBassinComponent;
  let fixture: ComponentFixture<FormVisiteBassinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisiteBassinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisiteBassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
