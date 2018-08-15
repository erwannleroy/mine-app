import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineStoreComponent } from './mine-store.component';

describe('MineStoreComponent', () => {
  let component: MineStoreComponent;
  let fixture: ComponentFixture<MineStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
