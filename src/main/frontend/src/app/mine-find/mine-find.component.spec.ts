import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFindComponent } from './mine-find.component';

describe('MineFindComponent', () => {
  let component: MineFindComponent;
  let fixture: ComponentFixture<MineFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
