import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBotonesComponent } from './mostrar-botones.component';

describe('MostrarBotonesComponent', () => {
  let component: MostrarBotonesComponent;
  let fixture: ComponentFixture<MostrarBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
