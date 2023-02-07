import { Component, Input } from '@angular/core';
import { redes } from '../redes';
import { EditarComponent } from '../editar/editar.component';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  redes = redes;

  @Input()  editar!: EditarComponent;

  irEnlace(link: string){
    window.open(link);
  }
}
