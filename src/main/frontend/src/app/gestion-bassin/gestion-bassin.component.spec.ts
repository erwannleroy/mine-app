import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBassinComponent } from './gestion-bassin.component';

describe('GestionBassinComponent', () => {
  let component: GestionBassinComponent;
  let fixture: ComponentFixture<GestionBassinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionBassinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
