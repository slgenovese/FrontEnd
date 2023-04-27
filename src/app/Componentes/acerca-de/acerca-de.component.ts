import { Component, Input, OnInit } from '@angular/core';
import { Acerca_De } from '../../modelos/acerca-de';
import { AcercaDeService } from '../../servicios/acerca-de.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

acerca_de: Acerca_De = new Acerca_De;

constructor(private acercaDeService: AcercaDeService) {}

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    this.acercaDeService.getAcercaDe().subscribe(data=>{this.acerca_de = data});
    console.log();
  }
}
