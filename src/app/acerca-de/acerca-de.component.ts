import { Component, Input, OnInit } from '@angular/core';
//import { acerca_de } from '../acerca-de';
import { Acerca_de } from '../modelo/acerca-de';
import { AcercaDeService } from 'src/servicios/acerca-de.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
//  acerca_de= acerca_de;

acerca_de: Acerca_de[] =[];

  constructor(private acercaDeService: AcercaDeService) {}

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    console.log("Paso Get");
    this.acercaDeService.getAcercaDe().subscribe(data=>{this.acerca_de=data});
    console.log(this.acerca_de);
  }
}
