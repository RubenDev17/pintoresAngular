import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpintorComponent } from './modificarpintor.component';

describe('ModificarpintorComponent', () => {
  let component: ModificarpintorComponent;
  let fixture: ComponentFixture<ModificarpintorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarpintorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpintorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
