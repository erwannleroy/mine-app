import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineVisiteComponent } from './mine-visite.component';

describe('MineVisiteComponent', () => {
  let component: MineVisiteComponent;
  let fixture: ComponentFixture<MineVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
