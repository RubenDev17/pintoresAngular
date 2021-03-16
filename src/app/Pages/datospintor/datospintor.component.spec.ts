import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospintorComponent } from './datospintor.component';

describe('DatospintorComponent', () => {
  let component: DatospintorComponent;
  let fixture: ComponentFixture<DatospintorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatospintorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospintorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
