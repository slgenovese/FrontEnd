import { Component, Input } from '@angular/core';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent {

  @Input()  editar!: EditarComponent;

}
