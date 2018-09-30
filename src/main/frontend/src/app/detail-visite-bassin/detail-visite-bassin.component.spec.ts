import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVisiteBassinComponent } from './detail-visite-bassin.component';

describe('DetailVisiteBassinComponent', () => {
  let component: DetailVisiteBassinComponent;
  let fixture: ComponentFixture<DetailVisiteBassinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVisiteBassinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVisiteBassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
