import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBassinsVisitesComponent } from './list-bassins-visites.component';

describe('ListBassinsVisitesComponent', () => {
  let component: ListBassinsVisitesComponent;
  let fixture: ComponentFixture<ListBassinsVisitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBassinsVisitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBassinsVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
