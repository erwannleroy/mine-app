import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBassinsComponent } from './list-bassins.component';

describe('ListBassinsComponent', () => {
  let component: ListBassinsComponent;
  let fixture: ComponentFixture<ListBassinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBassinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBassinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
