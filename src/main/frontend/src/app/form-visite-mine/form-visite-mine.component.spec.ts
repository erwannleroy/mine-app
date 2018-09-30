import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisiteMineComponent } from './form-visite-mine.component';

describe('FormVisiteMineComponent', () => {
  let component: FormVisiteMineComponent;
  let fixture: ComponentFixture<FormVisiteMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisiteMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisiteMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
