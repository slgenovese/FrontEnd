import { Component, Input } from '@angular/core';
import { educacion } from '../educacion';
import { BorrarComponent } from '../borrar/borrar.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion = educacion;

  @Input()  borrar!: BorrarComponent;
  
}
