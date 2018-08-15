import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFormComponent } from './mine-form.component';

describe('MineFormComponent', () => {
  let component: MineFormComponent;
  let fixture: ComponentFixture<MineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
