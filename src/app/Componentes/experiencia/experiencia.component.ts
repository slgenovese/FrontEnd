import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

//  experiencia: Experiencia[] =[];
  experiencia: Experiencia[]=[];

  constructor(private experienciaService: ExperienciaService) {}

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data=>{this.experiencia=data});
  }
}
