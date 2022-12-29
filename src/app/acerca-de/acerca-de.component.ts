import { Component } from '@angular/core';
import { acerca_de } from '../acerca-de';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  acerca_de= acerca_de;
}
