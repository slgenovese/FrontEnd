import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaGraficosComponent } from './alta-graficos.component';

describe('AltaGraficosComponent', () => {
  let component: AltaGraficosComponent;
  let fixture: ComponentFixture<AltaGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaGraficosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
