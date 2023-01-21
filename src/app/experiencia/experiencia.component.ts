import { Component, Input } from '@angular/core';
import { experiencia } from '../experiencia';
import { BorrarComponent } from '../borrar/borrar.component';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia=experiencia;

  @Input()  borrar!: BorrarComponent;

}
