import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopintorComponent } from './nuevopintor.component';

describe('NuevopintorComponent', () => {
  let component: NuevopintorComponent;
  let fixture: ComponentFixture<NuevopintorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevopintorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevopintorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
