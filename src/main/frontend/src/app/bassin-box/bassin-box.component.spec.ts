import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BassinBoxComponent } from './bassin-box.component';

describe('BassinBoxComponent', () => {
  let component: BassinBoxComponent;
  let fixture: ComponentFixture<BassinBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BassinBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BassinBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
