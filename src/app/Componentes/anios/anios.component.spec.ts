import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosComponent } from './anios.component';

describe('AniosComponent', () => {
  let component: AniosComponent;
  let fixture: ComponentFixture<AniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
