import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineListComponent } from './mine-list.component';

describe('MineListComponent', () => {
  let component: MineListComponent;
  let fixture: ComponentFixture<MineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
