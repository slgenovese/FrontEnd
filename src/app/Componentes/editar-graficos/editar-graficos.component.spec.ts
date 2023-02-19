import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGraficosComponent } from './editar-graficos.component';

describe('EditarGraficosComponent', () => {
  let component: EditarGraficosComponent;
  let fixture: ComponentFixture<EditarGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGraficosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
