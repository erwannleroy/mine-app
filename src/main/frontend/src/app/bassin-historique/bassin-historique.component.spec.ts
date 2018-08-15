import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BassinHistoriqueComponent } from './bassin-historique.component';

describe('BassinHistoriqueComponent', () => {
  let component: BassinHistoriqueComponent;
  let fixture: ComponentFixture<BassinHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BassinHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BassinHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
