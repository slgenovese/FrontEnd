import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosDonutsComponent } from './graficos-donuts.component';

describe('GraficosDonutsComponent', () => {
  let component: GraficosDonutsComponent;
  let fixture: ComponentFixture<GraficosDonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosDonutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
