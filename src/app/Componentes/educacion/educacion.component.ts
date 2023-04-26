import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from '../../servicios/educacion.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';
import { AltaComponent } from '../alta/alta.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  educacion: Educacion[]=[];

  constructor(private educacionService: EducacionService) {}

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;
  @Input()  alta!: AltaComponent;

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data=>{this.educacion=data});
  }
  
}
