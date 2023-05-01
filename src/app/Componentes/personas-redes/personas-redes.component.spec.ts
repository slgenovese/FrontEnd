import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasRedesComponent } from './personas-redes.component';

describe('PersonasRedesComponent', () => {
  let component: PersonasRedesComponent;
  let fixture: ComponentFixture<PersonasRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
