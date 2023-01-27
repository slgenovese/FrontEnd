import { Component, Input } from '@angular/core';
import { educacion } from '../educacion';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion = educacion;

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;
  
}
