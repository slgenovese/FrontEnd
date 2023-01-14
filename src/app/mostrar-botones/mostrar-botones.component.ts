import { Component, Directive } from '@angular/core';
import { educacion } from '../educacion';
import { acerca_de } from '../acerca-de';
import { banner } from '../banner';
import { experiencia } from '../experiencia';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';



@Component({
  selector: 'app-mostrar-botones',
  templateUrl: './mostrar-botones.component.html',
  styleUrls: ['./mostrar-botones.component.css'],
})
export class MostrarBotonesComponent {
  educacion=educacion;
  acerca_de= acerca_de;
  banner=banner;
  experiencia=experiencia;
  AcercaDeComponent: AcercaDeComponent['show']=true;
  
}
