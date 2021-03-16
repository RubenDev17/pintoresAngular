import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelpintoresComponent } from './panelpintores.component';

describe('PanelpintoresComponent', () => {
  let component: PanelpintoresComponent;
  let fixture: ComponentFixture<PanelpintoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelpintoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelpintoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
