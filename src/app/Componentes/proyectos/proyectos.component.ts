import { Component, Input, OnInit } from '@angular/core';
import { Proyectos } from '../../modelos/proyectos';
import { ProyectosService } from '../../servicios/proyectos.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyectos: Proyectos[] =[];

  constructor(private proyectosService: ProyectosService) {}

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe(data=>{this.proyectos=data});
  }

}
