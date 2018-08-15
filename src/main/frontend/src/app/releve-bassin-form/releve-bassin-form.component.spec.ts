import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveBassinFormComponent } from './releve-bassin-form.component';

describe('ReleveBassinFormComponent', () => {
  let component: ReleveBassinFormComponent;
  let fixture: ComponentFixture<ReleveBassinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveBassinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveBassinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
