import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOfflineComponent } from './data-offline.component';

describe('DataOfflineComponent', () => {
  let component: DataOfflineComponent;
  let fixture: ComponentFixture<DataOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
