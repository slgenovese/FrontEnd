import { Component, Input } from '@angular/core';
import { acerca_de } from '../acerca-de';
import { BorrarComponent } from '../borrar/borrar.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  acerca_de= acerca_de;

  @Input()  borrar!: BorrarComponent;
}
