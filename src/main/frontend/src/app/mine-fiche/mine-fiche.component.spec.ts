import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFicheComponent } from './mine-fiche.component';

describe('MineFicheComponent', () => {
  let component: MineFicheComponent;
  let fixture: ComponentFixture<MineFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
