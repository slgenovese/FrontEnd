import { Component } from '@angular/core';
import { redes } from '../redes';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  redes = redes;
  irEnlace(link: string){
    window.open(link);
  }
}
