import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jesusflores1Component } from './jesusflores1.component';

describe('Jesusflores1Component', () => {
  let component: Jesusflores1Component;
  let fixture: ComponentFixture<Jesusflores1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jesusflores1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jesusflores1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
